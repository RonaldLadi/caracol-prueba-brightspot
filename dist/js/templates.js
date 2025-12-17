
        Handlebars.registerPartial(
          'actions',
          Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component-action\">\n  <span class=\"actions-title\">Compartir:</span>\n  <div class=\"actions\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"items") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":34,"column":13}}})) != null ? stack1 : "")
    + "  </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <button class=\"actions__btn actions__btn--"
    + alias4(((helper = (helper = lookupProperty(helpers,"body") || (depth0 != null ? lookupProperty(depth0,"body") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body","hash":{},"data":data,"loc":{"start":{"line":6,"column":46},"end":{"line":6,"column":54}}}) : helper)))
    + "\" aria-label=\"Compartir en "
    + alias4(((helper = (helper = lookupProperty(helpers,"body") || (depth0 != null ? lookupProperty(depth0,"body") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body","hash":{},"data":data,"loc":{"start":{"line":6,"column":81},"end":{"line":6,"column":89}}}) : helper)))
    + "\"\n      title=\"Compartir en "
    + alias4(((helper = (helper = lookupProperty(helpers,"body") || (depth0 != null ? lookupProperty(depth0,"body") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body","hash":{},"data":data,"loc":{"start":{"line":7,"column":26},"end":{"line":7,"column":34}}}) : helper)))
    + "\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"includes")||(depth0 && lookupProperty(depth0,"includes"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),"Facebook",{"name":"includes","hash":{},"data":data,"loc":{"start":{"line":9,"column":12},"end":{"line":9,"column":38}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":14,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"includes")||(depth0 && lookupProperty(depth0,"includes"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),"Tweet",{"name":"includes","hash":{},"data":data,"loc":{"start":{"line":16,"column":12},"end":{"line":16,"column":35}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":6},"end":{"line":21,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"includes")||(depth0 && lookupProperty(depth0,"includes"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),"WhatsApp",{"name":"includes","hash":{},"data":data,"loc":{"start":{"line":23,"column":12},"end":{"line":23,"column":38}}}),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":6},"end":{"line":31,"column":13}}})) != null ? stack1 : "")
    + "\n    </button>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "      <svg class=\"actions__iconFb\" viewBox=\"0 0 512 512\" aria-hidden=\"true\">\n        <path\n          d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\" />\n      </svg>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "      <svg class=\"actions__iconTweet\" viewBox=\"0 0 512 512\" aria-hidden=\"true\">\n        <path\n          d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\" />\n      </svg>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "      <svg class=\"actions__iconWhatsapp\" viewBox=\"0 0 448 512\" aria-hidden=\"true\">\n        <path fill=\"#00be0a\"\n          d=\"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157z\" />\n        <path fill=\"#ffffff\"\n          d=\"M309.4 307.9c-5.3-2.7-31.1-15.3-35.9-17.1-4.8-1.8-8.3-2.7-11.8 2.7-3.5 5.3-13.5 17.1-16.5 20.6-3 3.5-6 4-11.3 1.3-31.1-15.5-51.5-27.7-72.1-62.9-5.5-9.5 5.5-8.8 15.8-29.4 1.8-3.5.9-6.6-.4-9.3-1.3-2.7-11.8-28.5-16.1-39-4.2-10.1-8.5-8.7-11.8-8.9-3-.2-6.6-.2-10.1-.2s-9.3 1.3-14.1 6.6c-4.8 5.3-18.5 18.1-18.5 44.1s18.9 51.1 21.5 54.6c2.7 3.5 37.2 56.8 90.2 79.7 12.6 5.5 22.4 8.8 30 11.3 12.6 4 24 3.4 33 2.1 10.1-1.5 31.1-12.7 35.5-25 4.4-12.4 4.4-23 .3-25.2-4-2.2-7.5-3.5-12.8-6.2z\" />\n      </svg>\n\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":36,"column":11}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true})
        );
      

        this.Templates = this.Templates || {};
        this.Templates['main'] =
          Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<header>\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"navigation"),(depth0 != null ? lookupProperty(depth0,"navigation") : depth0),{"name":"navigation","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"logo"),(depth0 != null ? lookupProperty(depth0,"logo") : depth0),{"name":"logo","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</header>\n\n<div class=\"headband\">\n  <div class=\"headband-content\">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"hotTopics"),(depth0 != null ? lookupProperty(depth0,"hotTopics") : depth0),{"name":"hotTopics","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"social"),(depth0 != null ? lookupProperty(depth0,"social") : depth0),{"name":"social","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  </div>\n</div>\n\n<div class=\"pageLead\">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"pageLead"),(depth0 != null ? lookupProperty(depth0,"pageLead") : depth0),{"name":"pageLead","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"breadcrumbs"),(depth0 != null ? lookupProperty(depth0,"breadcrumbs") : depth0),{"name":"breadcrumbs","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n<div class=\"content-grid\">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"lead"),(depth0 != null ? lookupProperty(depth0,"lead") : depth0),{"name":"lead","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  <div class=\"grid-right\">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"headline"),(depth0 != null ? lookupProperty(depth0,"headline") : depth0),{"name":"headline","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"subheadline"),(depth0 != null ? lookupProperty(depth0,"subHeadline") : depth0),{"name":"subheadline","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"audioPlayer"),(depth0 != null ? lookupProperty(depth0,"audioPlayer") : depth0),{"name":"audioPlayer","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"actions"),(depth0 != null ? lookupProperty(depth0,"actions") : depth0),{"name":"actions","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  </div>\n</div>";
},"usePartial":true,"useData":true});
      

        Handlebars.registerPartial(
          'audioPlayer',
          Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"audio-player\">\n  <button class=\"audio-player__btn\" aria-label=\"Reproducir audio\">▶</button>\n\n  <div class=\"audio-player__info\">\n    <span class=\"audio-player__title\">Escuchar audio</span>\n    <span class=\"audio-player__meta\">\n      "
    + alias4(((helper = (helper = lookupProperty(helpers,"audioTitle") || (depth0 != null ? lookupProperty(depth0,"audioTitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"audioTitle","hash":{},"data":data,"loc":{"start":{"line":8,"column":6},"end":{"line":8,"column":20}}}) : helper)))
    + " · "
    + alias4(((helper = (helper = lookupProperty(helpers,"audioDuration") || (depth0 != null ? lookupProperty(depth0,"audioDuration") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"audioDuration","hash":{},"data":data,"loc":{"start":{"line":8,"column":23},"end":{"line":8,"column":40}}}) : helper)))
    + "\n    </span>\n  </div>\n\n  <audio src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"audioUrl") || (depth0 != null ? lookupProperty(depth0,"audioUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"audioUrl","hash":{},"data":data,"loc":{"start":{"line":12,"column":14},"end":{"line":12,"column":26}}}) : helper)))
    + "\"></audio>\n</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":14,"column":9}}})) != null ? stack1 : "");
},"useData":true})
        );
      

        Handlebars.registerPartial(
          'breadcrumbs',
          Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <li class=\"breadcrumbs-item\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"href") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":5,"column":8},"end":{"line":13,"column":15}}})) != null ? stack1 : "")
    + "      </li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"href") || (depth0 != null ? lookupProperty(depth0,"href") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"href","hash":{},"data":data,"loc":{"start":{"line":6,"column":19},"end":{"line":6,"column":27}}}) : helper)))
    + "\" class=\"breadcrumbs-link\">\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"body") || (depth0 != null ? lookupProperty(depth0,"body") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body","hash":{},"data":data,"loc":{"start":{"line":7,"column":12},"end":{"line":7,"column":20}}}) : helper)))
    + "\n          </a>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <span class=\"breadcrumbs-current\">\n            "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"body") || (depth0 != null ? lookupProperty(depth0,"body") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"body","hash":{},"data":data,"loc":{"start":{"line":11,"column":12},"end":{"line":11,"column":20}}}) : helper)))
    + "\n          </span>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<nav class=\"breadcrumbs\" aria-label=\"Breadcrumb\">\n  <ol class=\"breadcrumbs-list\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":15,"column":13}}})) != null ? stack1 : "")
    + "  </ol>\n</nav>\n";
},"useData":true})
        );
      

        Handlebars.registerPartial(
          'headline',
          Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1 class=\"headline\">\n  "
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "\n</h1>\n";
},"useData":true})
        );
      

        Handlebars.registerPartial(
          'hotTopics',
          Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <li class=\"hot-topics__item\">\n        <a\n          href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":8,"column":16},"end":{"line":8,"column":23}}}) : helper)))
    + "\"\n          target=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"target") || (depth0 != null ? lookupProperty(depth0,"target") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"target","hash":{},"data":data,"loc":{"start":{"line":9,"column":18},"end":{"line":9,"column":28}}}) : helper)))
    + "\"\n          class=\"hot-topics__link\"\n        >\n          "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":12,"column":10},"end":{"line":12,"column":19}}}) : helper)))
    + "\n        </a>\n      </li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<section class=\"hot-topics\">\n  <h2 class=\"hot-topics__title\">Tendencias</h2>\n\n  <ul class=\"hot-topics__list\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":15,"column":13}}})) != null ? stack1 : "")
    + "  </ul>\n</section>\n";
},"useData":true})
        );
      

        Handlebars.registerPartial(
          'lead',
          Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <figure class=\"lead\">\n    <img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"image") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + "\" width=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"image") : depth0)) != null ? lookupProperty(stack1,"width") : stack1), depth0))
    + "\" height=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"image") : depth0)) != null ? lookupProperty(stack1,"height") : stack1), depth0))
    + "\"alt=\""
    + alias2(((helper = (helper = lookupProperty(helpers,"alt") || (depth0 != null ? lookupProperty(depth0,"alt") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"alt","hash":{},"data":data,"loc":{"start":{"line":3,"column":83},"end":{"line":3,"column":90}}}) : helper)))
    + "\">\n  </figure>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":5,"column":9}}})) != null ? stack1 : "");
},"useData":true})
        );
      

        Handlebars.registerPartial(
          'logo',
          Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"href") || (depth0 != null ? lookupProperty(depth0,"href") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"href","hash":{},"data":data,"loc":{"start":{"line":3,"column":13},"end":{"line":3,"column":21}}}) : helper)))
    + "\" class=\"logo__link\">\n      <img\n        src=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"image") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + "\"\n        alt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"alt") || (depth0 != null ? lookupProperty(depth0,"alt") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"alt","hash":{},"data":data,"loc":{"start":{"line":6,"column":13},"end":{"line":6,"column":20}}}) : helper)))
    + "\"\n        width=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"image") : depth0)) != null ? lookupProperty(stack1,"width") : stack1), depth0))
    + "\"\n        height=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"image") : depth0)) != null ? lookupProperty(stack1,"height") : stack1), depth0))
    + "\"\n        class=\"logo__image\"\n        loading=\"lazy\"\n      />\n    </a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"logo\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":2},"end":{"line":13,"column":11}}})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true})
        );
      

        Handlebars.registerPartial(
          'navigation',
          Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <ul class=\"navigation__list\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"items") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":6},"end":{"line":20,"column":15}}})) != null ? stack1 : "")
    + "    </ul>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <li class=\"navigation__item\">\n          <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"href") || (depth0 != null ? lookupProperty(depth0,"href") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"href","hash":{},"data":data,"loc":{"start":{"line":16,"column":19},"end":{"line":16,"column":27}}}) : helper)))
    + "\" class=\"navigation__link"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isCurrent") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":52},"end":{"line":16,"column":86}}})) != null ? stack1 : "")
    + "\">\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":17,"column":12},"end":{"line":17,"column":20}}}) : helper)))
    + "\n          </a>\n        </li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return " is-active";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<nav class=\"navigation\">\n  <button\n    class=\"navigation__toggle\"\n    aria-label=\"Abrir menú\"\n    aria-expanded=\"false\"\n  >\n    <span></span>\n    <span></span>\n    <span></span>\n  </button>\n\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":2},"end":{"line":22,"column":11}}})) != null ? stack1 : "")
    + "</nav>\n";
},"useData":true})
        );
      

        Handlebars.registerPartial(
          'pageLead',
          Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <figure class=\"page-lead-media\">\n      <picture>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"image") : depth0)) != null ? lookupProperty(stack1,"webpSrc") : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":8},"end":{"line":7,"column":15}}})) != null ? stack1 : "")
    + "\n        <img src=\""
    + alias3(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"image") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"image") : depth0)) != null ? lookupProperty(stack1,"srcset") : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":33},"end":{"line":9,"column":85}}})) != null ? stack1 : "")
    + " width=\""
    + alias3(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"image") : depth0)) != null ? lookupProperty(stack1,"width") : stack1), depth0))
    + "\" height=\""
    + alias3(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"image") : depth0)) != null ? lookupProperty(stack1,"height") : stack1), depth0))
    + "\" alt=\""
    + alias3(((helper = (helper = lookupProperty(helpers,"alt") || (depth0 != null ? lookupProperty(depth0,"alt") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"alt","hash":{},"data":data,"loc":{"start":{"line":9,"column":141},"end":{"line":9,"column":148}}}) : helper)))
    + "\" loading=\"lazy\">\n      </picture>\n    </figure>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <source srcset=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"image") : depth0)) != null ? lookupProperty(stack1,"webpSrcset") : stack1), depth0))
    + ((stack1 = lookupProperty(helpers,"unless").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"image") : depth0)) != null ? lookupProperty(stack1,"webpSrcset") : stack1),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":46},"end":{"line":6,"column":102}}})) != null ? stack1 : "")
    + "\"type=\"image/webp\">\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"image") : depth0)) != null ? lookupProperty(stack1,"webpSrc") : stack1), depth0));
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "srcset=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"image") : depth0)) != null ? lookupProperty(stack1,"srcset") : stack1), depth0))
    + "\"";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<section class=\"page-lead\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":2},"end":{"line":12,"column":11}}})) != null ? stack1 : "")
    + "</section>\n";
},"useData":true})
        );
      

        Handlebars.registerPartial(
          'social',
          Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <ul class=\"social__list\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"items") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":6},"end":{"line":34,"column":15}}})) != null ? stack1 : "")
    + "    </ul>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <li class=\"social__item social__item--"
    + alias4(((helper = (helper = lookupProperty(helpers,"socialService") || (depth0 != null ? lookupProperty(depth0,"socialService") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"socialService","hash":{},"data":data,"loc":{"start":{"line":5,"column":46},"end":{"line":5,"column":63}}}) : helper)))
    + "\">\n          <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"href") || (depth0 != null ? lookupProperty(depth0,"href") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"href","hash":{},"data":data,"loc":{"start":{"line":6,"column":19},"end":{"line":6,"column":27}}}) : helper)))
    + "\" class=\"social__link\" target=\"_blank\" rel=\"noopener\" aria-label=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"socialService") || (depth0 != null ? lookupProperty(depth0,"socialService") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"socialService","hash":{},"data":data,"loc":{"start":{"line":6,"column":93},"end":{"line":6,"column":110}}}) : helper)))
    + "\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"socialService") : depth0),"facebook",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":8,"column":18},"end":{"line":8,"column":47}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":12},"end":{"line":12,"column":19}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"socialService") : depth0),"instagram",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":14,"column":18},"end":{"line":14,"column":48}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":12},"end":{"line":18,"column":19}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"socialService") : depth0),"twitter",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":20,"column":18},"end":{"line":20,"column":46}}}),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":12},"end":{"line":24,"column":19}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"socialService") : depth0),"youtube",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":26,"column":18},"end":{"line":26,"column":46}}}),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":12},"end":{"line":30,"column":19}}})) != null ? stack1 : "")
    + "\n          </a>\n        </li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "              <svg class=\"social__icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" aria-hidden=\"true\">\n                <path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"/>\n              </svg>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "              <svg class=\"social__icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" aria-hidden=\"true\">\n                <path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8z\"/>\n              </svg>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "              <svg class=\"social__icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" aria-hidden=\"true\">\n                <path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"/>\n              </svg>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "              <svg class=\"social__icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" aria-hidden=\"true\">\n                <path d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"/>\n              </svg>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"social\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":2},"end":{"line":36,"column":11}}})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true})
        );
      

        Handlebars.registerPartial(
          'subheadline',
          Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<p class=\"subheadline\">\n  "
    + ((stack1 = container.lambda(depth0, depth0)) != null ? stack1 : "")
    + "\n</p>\n";
},"useData":true})
        );
      