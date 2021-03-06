/* eslint-disable eqeqeq */
/**
 * DNA PARALLAX
 * CSS-defined parallax effects bound to scrollbar
 *
 * GNU General Public License v3.0
 * https://github.com/webdevelopers-eu/DNA-Parallax/blob/master/LICENSE
 *
 * If you're looking for the latest version see https://github.com/webdevelopers-eu/dna-parallaxa
 *
 *
 * SYNTAX:
 *
 * <element role="parallax-container ...">
 *   <element parallax="KEYFRAMES_NAME[:MODIFIERS] [KEYFRAMES_NAME[:MODIFIERS] ...]" [parallax-container="CSS_SELECTOR"]>...</element>
 * </element>
 *
 * - MODIFIERS - list of ':' separated timeline modifiers. Supported:
 *    - "reverse" - reverse the animation. E.g. "0%" will become "100%", "20%" => "80%" etc.
 *    - "shift({NUM}%)" - shift time forward/backward by given amount of %
 *    - "scale({FLOAT})" - shrink, lengthen animation. Each "%" will be multiplied by given float constant.
 * - "parallax-container" - parent with this role will be used to calculate animation progress. If not found then @parallax element is used instead.
 * - KEYFRAMES_NAME - name of the @keyframes CSS at-rule definning animation. Multiple @keyframes will be joined into one animation.
 *
 * For more information see https://github.com/webdevelopers-eu/dna-parallax
 *
 * @module     DNA Parallax
 * @author     Daniel Sevcik <sevcik@webdevelopers.cz>
 * @copyright  2019 Daniel Sevcik
 * @since      2019-01-26 13:05:24 UTC
 */
import $ from 'jquery';

const jqueryParallax = function () {
    const $window = $( window );
    const allRules = {};
    let lock = 0;
    let viewTop = $window.scrollTop();
    let viewHeight = $window.height();
    let viewTopLast = viewTop;
    let scrolling = true;
    const eventType = 'scroll'; //  "scroll" | "frame" use on-scroll event or requestAnimationFrame
    // Install animation hooks
    function installHooks() {
        $window
            .on( 'resize.parallax', function () {
                viewHeight = $window.height();
            });

        if ( eventType == 'scroll' ) {
            $window
                .on( 'wheel.parallax scroll.parallax resize.parallax', function () {
                    scrollingOn();
                    requestFrame();
                    clearTimeout( scrolling );
                    scrolling = setTimeout( scrollingOff, 24 );
                })
                .on( 'load.parallax', requestFrame );
        }
        $( requestFrame );
    }

    function requestFrame() {
        if ( lock++ ) return; // prevent simultaneous recalcs
        while ( scrolling && animateFrame() );
        lock = 0;
        if ( eventType == 'frame' ) {
            window.requestAnimationFrame( requestFrame );
        }
    }

    // Recalculate everything - scroll/resize hook
    function animateFrame() {
        const viewTopCurr = $window.scrollTop();
        const $all = $( '[parallax]' );

        if ( viewTopCurr == viewTopLast && !$all.is( ':not([parallax-status])' ) /* need to initialize new anim */ ) {
            return false;
        }

        viewTopLast = viewTop;
        viewTop = viewTopCurr;

        // Do those currently visible
        const $onscreen = $all.not( '[parallax-status="off"]' );
        $onscreen.parallax();

        // If scrolling down then don't consider animations already scrolled up, if scrolling up ignore animations scrolled down...
        $all
            .not( $onscreen )
            .not( viewTop - viewTopLast > 0 ? "[parallax-progress='100%']" : "[parallax-progress='0%']" )
            .parallax();

        return true;
    }

    function scrollingOff() {
        scrolling = false;
        $( '[parallax-will-change]' ).css( 'will-change', '' );
    }

    function scrollingOn() {
        scrolling = true;
        $( '[parallax-will-change][parallax-status="on"]' ).css( 'will-change', function () {
            return this.getAttribute( 'parallax-will-change' );
        });
    }

    // jQuery plugin - progress animation or force reinitialization
    // $(el).parallax(["init"]);
    $.fn.parallax = function ( param ) {
        // Remove position cache
        this.each( function () {
            if ( this.parallax && this.parallax.$container ) {
                this.parallax.$container.removeData( 'parallaxOffset' );
            }
        });

        return this.each( function () {
            const $this = $( this );

            // Initialize
            if ( !this.parallax || param == 'init' ) {
                try {
                    this.parallax = new DnaParallax( this );
                } catch ( e ) {
                    if ( !$this.attr( 'parallax-error' ) ) { // To avoid flooding console with errors. Log first only.
                        console.error( 'DNA Parallax Exception: ' + e.message );
                    }
                    $this.attr({
                        'parallax-status': 'error',
                        'parallax-error': e.message
                    });
                    return;
                }
                $this.attr( 'parallax-status', 'ready' );
            }
            this.parallax.step();
        });
    };

    // ------------------------------------------------------------------------

    /**
	 * Parallax object that is stored on element in element.parallax property.
	 *
	 * @param DOMElement element to be animated
	 */
    function DnaParallax( element ) {
        this.$element = $( element );

        // Find container
        const containerSelector = $.trim( this.$element.attr( 'parallax-container' ) );
        if ( containerSelector ) { // Use @parallax-container selector to bind to container
            this.$container = $( containerSelector );

            if ( !this.$container.length ) { // Exception - container not found
                this.$container = this.$element;
                throw new Error( 'Cannot find associated container "' + containerSelector + '"' );
            }
        } else { // Use parent's @role attribute or self
            this.$container = this.$element.closest( '[role~="parallax-container"]' );
            if ( !this.$container.length ) this.$container = this.$element;
        }

        // Parse settings
        this.anim = new DnaAnim( this.$element.attr( 'parallax' ) );

        // This makes it blurry in Chrome - needs to be set and unset afterword...
        // https://developer.mozilla.org/en-US/docs/Web/CSS/will-change
        const animateProps = Object.getOwnPropertyNames( this.anim.namedProps );
        animateProps.push( 'scroll-position' );
        this.$element.attr( 'parallax-will-change', animateProps.join( ', ' ) );
    }

    /**
	 * The element to be animated.
	 *
	 * @var jQuery
	 */
    DnaParallax.prototype.$element = null;

    /**
	 * Container element to calculate progress. It is any parent with
	 * .parallax-container class or self.

	 * @var jQuery
	 */
    DnaParallax.prototype.$container = null;

    /**
	 * Object with animation settings.
	 *
	 * @var DnaAnim
	 */
    DnaParallax.prototype.anim = null;

    /**
	 * Current animation progress state.
	 *
	 * @var float can be <0 or >1
	 */
    DnaParallax.prototype.realProgress = null;

    /**
	 * Current animation progress state.
	 *
	 * @var float (1 = 100%) from range <0;1>
	 */
    DnaParallax.prototype.progress = null;

    /**
	 * Move animation in given state.
	 *
	 * @return void
	 */
    DnaParallax.prototype.step = function () {
        this.calculateProgress();

        const style = {};
        for ( let i = 0; i < this.anim.props.length; i++ ) {
            const prop = this.anim.props[i];
            style[prop.name] = prop.get( this.realProgress );
        }

        this.$element.css( style );
    };

    /**
	 * Calculates current progress based on this.$container's position
	 * and updates this.progress property with calculated value.
	 *
	 * Also updates @parallax-progress attribute on the element.
	 *
	 * @return void
	 */
    DnaParallax.prototype.calculateProgress = function () {
        // Check if it was precalculated by other [parallax] sibling.
        let offset = this.$container.data( 'parallaxOffset' );
        if ( !offset ) {
            offset = this.$container.offset();
            this.$container.data( 'parallaxOffset', offset );
        }

        const containerTop = offset.top;
        const containerHeight = this.$container.height();
        let progress0, progress100;

        // 0%: container's top is alligned with view's bottom
        // 100%: container's bottom is alligned with view's top
        progress0 = containerTop - viewHeight;
        progress100 = containerTop + containerHeight;
        this.progress = ( viewTop - progress0 ) / ( progress100 - progress0 );

        // Round to 4 digits, should be enough for smoothness and avoids loooong floats in debug
        this.realProgress = Math.round( this.progress * 1000000 ) / 1000000;
        this.progress = this.realProgress;

        if ( this.progress > 1 ) this.progress = 1;
        else if ( this.progress < 0 ) this.progress = 0;

        const attrs = {
            'parallax-progress': Math.floor( this.progress * 100 ) + '%',
            'parallax-step': 'penta-' + Math.floor( this.progress * 20 ) * 5 + ' deca-' + Math.floor( this.progress * 10 ) * 10 + '',
            'parallax-status': this.realProgress < 0 || this.realProgress > 1 ? 'off' : 'on'
        };

        this.$element.attr( attrs );
        this.$container.attr( attrs );
    };

    // ------------------------------------------------------------------------

    /**
	 * Animation settings.
	 *
	 * @param string parallaxNames content of "parallax" attribute on the element
	 */
    function DnaAnim( parallaxNames ) {
        let i, j, k;

        parallaxNames = parallaxNames.replace( /\s*([,(:])\s*/g, '$1' ); // Remove spaces in brackets and such
        const names = $.trim( parallaxNames ).split( /\s+/ );

        this.props = [];
        this.rules = [];
        this.namedProps = {};

        // Find animation object
        for ( k = 0; k < names.length; k++ ) {
            if ( names[k].match( /:debugger/ ) ) {
                debugger;
                continue;
            }

            let rule = null;
            const modifiers = names[k].split( ':' );
            const name = modifiers.shift();

            if ( allRules[name] ) { // Already found
                rule = allRules[name];
            } else { // Search again, new CSS may be loaded...
                for ( i = 0; !rule && i < document.styleSheets.length; ++i ) {
                    const sheet = document.styleSheets[i];
                    try {
                        for ( j = 0; !rule && j < sheet.cssRules.length; ++j ) {
                            const sheetRule = sheet.cssRules[j];
                            if ( sheetRule.type == 7 ) {
                                allRules[sheetRule.name] = sheetRule; // Collect it for faster repeated search
                                if ( sheetRule.name == name ) {
                                    rule = sheetRule;
                                }
                            }
                        }
                    } catch ( e ) { // may be triggered by forbidden access to third-party CSS

                        if ( e.code == 18 ) { // Ignore - quite common with third-parth CSS message: "Failed to read the 'cssRules' property from 'CSSStyleSheet': Cannot access rules"
                            console.log( 'DNA Parallax: Cannot read CSS rules, add attribute crossorigin="anonymous" on <link> tag if you store your @keyframes definitions in following file: ' + sheet.href );
                        } else {
                            console.log( 'DNA Parallax: ' + e.name + ' Exception wile accessing CSS ' + sheet.href, e.message ); // non fatal? What to do?
                        }
                    }
                }
            }

            if ( !rule ) {
                throw new Error( 'Cannot find animation ' + JSON.stringify( name ) );
            }

            this.parseRule( rule, modifiers );
        }
    }

    /**
	 * Array of ordered props.
	 *
	 * @var []
	 */
    DnaAnim.prototype.props = null;

    /**
	 * Array of props.
	 *
	 * @var {} of named props
	 */
    DnaAnim.prototype.namedProps = null;

    /**
	 * Animation rule object.
	 *
	 * @var [] of parsed CSSKeyframesRule objects
	 */
    DnaAnim.prototype.rules = null;

    /**
	 * Parse CSSKeyframesRule into array for easier processing.
	 *
	 * @param CSSKeyframesRule rule parse keyframes into props
	 * @param [] modifiers that follow the animation name: e.g. ["reverse", "shift(10%)", "scale(1.3,2)"] for "my-anim:reverse:shift(10%):scale(1.3,2)" animation name.
	 * @return void
	 */
    DnaAnim.prototype.parseRule = function ( rule, modifiers ) {
        this.rules.push( rule );

        // Split modifiers in subarrays with separated arguments: "scale(1.3,2)" => ["scale", "1.3", "2"]
        modifiers = modifiers.map( function ( mod ) {
            return $.trim( mod.replace( /[,()]+/g, ' ' ) ).split( /\s+/ );
        });

        // Extract keyframe styles
        for ( let ruleIdx = 0; ruleIdx < rule.cssRules.length; ruleIdx++ ) {
            const kf = rule.cssRules[ruleIdx]; // @type CSSKeyframesRule
            const progressList = kf.keyText.replace( /[^0-9%.,]+/g, '' ).split( ',' );

            for ( let progressIdx = 0; progressIdx < progressList.length; progressIdx++ ) {
                let progress = parseFloat( progressList[progressIdx] ) / 100;

                // Apply modifiers
                for ( let modIdx = 0; modIdx < modifiers.length; modIdx++ ) {
                    const mod = modifiers[modIdx];
                    switch ( mod[0] ) {
                    case 'reverse': progress = 1 - progress; break;
                    case 'shift': progress += parseFloat( mod[1] || 0 ) / 100; break;
                    case 'scale': progress *= parseFloat( mod[1] || 1 ); break;
                    case 'debugger': /* debugger; */ break;
                    default: console.error( 'Unknown modifier "' + mod[0] + '"', modifiers );
                    }
                }

                for ( let styleIdx = 0; styleIdx < kf.style.length; styleIdx++ ) {
                    const propName = kf.style[styleIdx];
                    if ( !this.namedProps[propName] ) {
                        this.namedProps[propName] = new DnaProp( propName );
                        this.props.push( this.namedProps[propName] );
                    }
                    this.namedProps[propName].add( progress, kf.style[propName] );
                }
            }
        }

    };

    // ------------------------------------------------------------------------

    /**
	 * Holds animated property with values at specified keyframes.
	 *
	 * @param string name of the CSS property
	 */
    function DnaProp( name ) {
        this.name = name;
        this.list = [];
    }

    /**
	 * Name of the CSS property
	 *
	 * @var string
	 */
    DnaProp.prototype.name = null;

    /**
	 * Values at given keyframes.
	 *
	 * @var []
	 */
    DnaProp.prototype.list = null;

    /**
	 * Assign new value to given keyframe
	 *
	 * @param float progress identifying the keyframe
	 * @param string value
	 * @return void
	 */
    DnaProp.prototype.add = function ( progress, styleText ) {
        const re = /[+-]?[0-9]+(\.[0-9]+)?/g;
        const obj = {
            'progress': progress,
            'styleText': styleText,
            'values': ( styleText.match( re ) || [] ).map( function ( v ) { return parseFloat( v ); }),
            'template': styleText.replace( re, '@' )
        };

        for ( let i = 0; i < this.list.length; i++ ) {
            if ( this.list[i].progress == progress ) {
                this.list[i] = obj;
                return;
            }
        }

        this.list.push( obj );
        this.list.sort( function ( a, b ) {
            return a.progress - b.progress;
        });
    };

    /**
	 * Get value at given keyframe
	 *
	 * @param float progress identifying the keyframe
	 * @return string recalculated value
	 */
    DnaProp.prototype.get = function ( progress ) {
        let i, before, after;

        if ( progress > 1 || progress < 0 ) {
            return ''; // Unset setting because it is outside of the range.
        }

        // Find closest keyframe definitions
        for ( i = 0; i < this.list.length; i++ ) {
            const kf = this.list[i];
            if ( kf.progress == progress ) { // direct hit
                return kf.styleText;
            } else if ( kf.progress < progress ) {
                before = kf;
            } else { // kf.progress > progress
                after = kf;
                break;
            }
        }

        // Progress is outside of our definitions - use first or last as default
        if ( !before ) {
            return after.styleText;
        } else if ( !after ) {
            return before.styleText;
        }

        let template = before.template;
        const ratio = ( progress - before.progress ) / ( after.progress - before.progress );
        const maxIndex = Math.max( after.values.length, before.values.length );

        for ( i = 0; i < maxIndex; i++ ) {
            let val1 = before.values[i];
            let val2 = after.values[i];

            if ( isNaN( val1 ) ) {
                val1 = this.fixValue( i ) || val2;
            }
            if ( isNaN( val2 ) ) {
                val2 = this.fixValue( i ) || val1;
            }

            template = template.replace( '@', val1 + ( val2 - val1 ) * ratio );
        }

        return template;
    };

    /**
	 *
	 * Try to fix missing/not matching values
	 *
	 * @access private
	 * @param int index what position of the value is missing (0-based)
	 * @return float new fixed value
	 */
    DnaProp.prototype.fixValue = function ( index ) {
        if ( this.name.match( /color$/ ) && index == 3 ) {
            // rgba(r, g, b, 1) gets converted to rgb(r, g, b) and "1" is left out
            return 1;
        }
        // Issue warnings?
        return undefined;
    };

    // ------------------------------------------------------------------------

    installHooks();

};

export default jqueryParallax;
/* eslint-enable eqeqeq */
