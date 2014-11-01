// Export grunt.
module.exports = function(grunt) {

    // Load all packages.
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    // Create variables.
    var generalBanner = "/* " + Date() + "*/";

    // Paths.
    var path = {};
        path.bower       = "bower_components/";
        path.source      = "source/";
        path.public      = "public/";
        path.assets      = path.public  + "assets/";
        path.html        = path.source  + "html/";
        path.templates   = path.source  + "templates/";
        path.js          = path.source  + "script/";
        path.css         = path.source  + "sass/";
        path.fonts       = path.source  + "fonts/";
        path.img         = path.source  + "images/";
        path.build_js    = path.assets  + "js/";
        path.build_css   = path.assets  + "css/";
        path.build_tpl   = path.assets  + "tpl/";
        path.build_fonts = path.assets  + "fonts/";
        path.build_img   = path.assets  + "img/";
        path.build_html  = path.assets;

    // Htmlhint config.
    var htmlHint = {
        build: {
            options: {
                'tag-pair'                  : true,
                'tagname-lowercase'         : true,
                'attr-lowercase'            : true,
                'attr-value-double-quotes'  : true,
                'spec-char-escape'          : true,
                'id-unique'                 : true,
                'head-script-disabled'      : true,
                'style-disabled'            : true
            },
            src: [
                path.html       + "*.html",
                path.templates  + "*.tpl"
            ]
        }
    };

    // Htmlmin config.
    var htmlMin = {
        dynamic: {
            options : {
                removeComments    : true,
                collapseWhitespace: true
            },
            files   : []
        }
    };
        // Add files to htmlmin.
        htmlMin.dynamic.files.push({
            expand  : true,
            cwd     : path.templates,
            src     : ['**/*.tpl'],
            dest    : path.build_tpl,
            ext     : '.tpl',
            extDot  : 'first'
        });
        htmlMin.dynamic.files.push({
            expand  : true,
            cwd     : path.html,
            src     : ['**/*.html'],
            dest    : path.build_html,
            ext     : '.html',
            extDot  : 'first'
        });

    // Uglify config.
    var uglify = {
        build: {
            options : {
                banner: generalBanner
            },
            files   : {}
        }
    };
        // Add files to uglify.
        uglify.build.files[path.build_js + "main.min.js"] = [
            path.bower  + "angularjs/angular.js"
        ];

    // Css vars.
    var cssExportPath = path.build_css + "style.css";

    // Consolidate Css.
    var cssC = {
        build: {
            options: {
                consolidateViaDeclarations  : true,
                consolidateViaSelectors     : true,
                consolidateMediaQueries     : true
            },
            files: {
            }
        }
    };
        // Add files to css consolidate.
        cssC.build.files[cssExportPath] = cssExportPath;

    // Minify css.
    var cssMin = {
        build: {
            options: {
                banner: generalBanner,
                keepSpecialComments: 0
            },
            src : [
                cssExportPath
            ],
            dest: cssExportPath
        }
    };

    // Sass export.
    var sass = {
        build: {
            files: {
            }
        }
    };
        // Add files to sass.
        sass.build.files[cssExportPath] = path.css + "gui.scss";

    // Copy files config.
    var copy = {
        img: {
            expand  : true,
            filter  : 'isFile',
            cwd     : path.img,
            src     : "**",
            dest    : path.build_img
        }
    };

    // Watch config.
    var watch = {
        html: {
            files: [
                path.html + "**/*.html",
                path.templates + "**/*.tpl"
            ],
            tasks: ['buildhtml']
        },
        js: {
            files: [].concat(uglify.build.files[path.build_js + "main.min.js"]),
            tasks: ['buildjs']
        },
        css: {
            files: [
                path.css + "**/*.scss"
            ],
            tasks: ['buildcss']
        },
        copy: {
            files: [
                path.img + "**"
            ],
            tasks: ["buildcopy"]
        }
    };

    // Create initConfig object.
    var initConfig = {
        htmlhint: htmlHint,
        htmlmin : htmlMin,
        uglify  : uglify,
        sass    : sass,
        cssc    : cssC,
        cssmin  : cssMin,
        copy    : copy,
        watch   : watch
    };

    // Grunt init config.
    grunt.initConfig(initConfig);

    // Tasks.
    grunt.registerTask('buildjs'    , ['uglify']);
    grunt.registerTask('buildcss'   , ['sass', 'cssc', 'cssmin']);
    grunt.registerTask('buildhtml'  , ['htmlhint', 'htmlmin']);
    grunt.registerTask('buildcopy'  , ['copy']);
    grunt.registerTask('buildall'   , ['buildjs', 'buildcss', 'buildhtml', "buildcopy"]);
};
