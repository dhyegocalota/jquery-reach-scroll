module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    meta: {
      banner: "/*!\n" +
        " *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
        " *\n" +
        " *  Last release at <%= grunt.template.today('dd/mm/yyyy') %>\n" +
        " *  MIT License - http://dhyegofernando.mit-license.org/\n" +
        " */\n"
    },

    clean: ["dist/*"],

    lintspaces: {
      all: {
        src: [
          "src/*"
        ],
        options: {
          newline: true,
          trailingspaces: true,
          indentation: "spaces",
          spaces: 2,
          ignores: [
            "js-comments"
          ]
        }
      }
    },

    jshint: {
      files: ["src/jquery.reach-scroll.js"],
      options: {
        jshintrc: ".jshintrc"
      }
    },

    concat: {
      options: {
        stripBanners: "block",
        banner: "<%= meta.banner %>"
      },
      dist: {
        src: ["src/jquery.reach-scroll.js"],
        dest: "dist/jquery.reach-scroll.js"
      }
    },

    uglify: {
      options: {
        banner: "<%= meta.banner %>"
      },
      dist: {
        src: ["dist/jquery.reach-scroll.js"],
        dest: "dist/jquery.reach-scroll.min.js"
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-lintspaces");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("default", [
    "clean",
    "lintspaces",
    "jshint",
    "concat",
    "uglify"
  ]);

  grunt.registerTask("test", [
    "lintspaces",
    "jshint"
  ]);
};
