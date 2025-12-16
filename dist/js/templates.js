
        this.Templates = this.Templates || {};
        this.Templates['card'] =
          Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});
      

        Handlebars.registerPartial(
          'actions',
          Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"actions\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"items") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":7,"column":13}}})) != null ? stack1 : "")
    + "  </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <button>\n        "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"body") || (depth0 != null ? lookupProperty(depth0,"body") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"body","hash":{},"data":data,"loc":{"start":{"line":5,"column":8},"end":{"line":5,"column":16}}}) : helper)))
    + "\n      </button>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":9,"column":9}}})) != null ? stack1 : "");
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
    + "</header>\n\n<div class=\"headband\">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"hotTopics"),(depth0 != null ? lookupProperty(depth0,"hotTopics") : depth0),{"name":"hotTopics","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"social"),(depth0 != null ? lookupProperty(depth0,"social") : depth0),{"name":"social","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n\n<div class=\"pageLead\">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"pageLead"),(depth0 != null ? lookupProperty(depth0,"pageLead") : depth0),{"name":"pageLead","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n\n<div class=\"breadcrumbs\">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"breadcrumbs"),(depth0 != null ? lookupProperty(depth0,"breadcrumbs") : depth0),{"name":"breadcrumbs","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n\n<div class=\"content\">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"lead"),(depth0 != null ? lookupProperty(depth0,"lead") : depth0),{"name":"lead","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"headline"),(depth0 != null ? lookupProperty(depth0,"headline") : depth0),{"name":"headline","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"subheadline"),(depth0 != null ? lookupProperty(depth0,"subHeadline") : depth0),{"name":"subheadline","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"audioPlayer"),(depth0 != null ? lookupProperty(depth0,"audioPlayer") : depth0),{"name":"audioPlayer","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"actions"),(depth0 != null ? lookupProperty(depth0,"actions") : depth0),{"name":"actions","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>";
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

  return "  <div class=\"audio-player\">\n    <audio controls src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"audioUrl") || (depth0 != null ? lookupProperty(depth0,"audioUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"audioUrl","hash":{},"data":data,"loc":{"start":{"line":3,"column":25},"end":{"line":3,"column":37}}}) : helper)))
    + "\">\n      Tu navegador no soporta audio HTML5\n    </audio>\n\n    <p class=\"audio-title\">\n      "
    + alias4(((helper = (helper = lookupProperty(helpers,"audioTitle") || (depth0 != null ? lookupProperty(depth0,"audioTitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"audioTitle","hash":{},"data":data,"loc":{"start":{"line":8,"column":6},"end":{"line":8,"column":20}}}) : helper)))
    + "\n      "
    + alias4(((helper = (helper = lookupProperty(helpers,"audioDuration") || (depth0 != null ? lookupProperty(depth0,"audioDuration") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"audioDuration","hash":{},"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":9,"column":23}}}) : helper)))
    + "\n    </p>\n  </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":12,"column":9}}})) != null ? stack1 : "");
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
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"items") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":6},"end":{"line":23,"column":15}}})) != null ? stack1 : "")
    + "    </ul>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <li class=\"navigation__item\">\n          <a\n            href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"href") || (depth0 != null ? lookupProperty(depth0,"href") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"href","hash":{},"data":data,"loc":{"start":{"line":17,"column":18},"end":{"line":17,"column":26}}}) : helper)))
    + "\"\n            class=\"navigation__link"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isCurrent") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":35},"end":{"line":18,"column":69}}})) != null ? stack1 : "")
    + "\"\n          >\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":20,"column":12},"end":{"line":20,"column":20}}}) : helper)))
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
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":2},"end":{"line":25,"column":11}}})) != null ? stack1 : "")
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
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"items") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":6},"end":{"line":16,"column":15}}})) != null ? stack1 : "")
    + "    </ul>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <li class=\"social__item social__item--"
    + alias4(((helper = (helper = lookupProperty(helpers,"socialService") || (depth0 != null ? lookupProperty(depth0,"socialService") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"socialService","hash":{},"data":data,"loc":{"start":{"line":5,"column":46},"end":{"line":5,"column":63}}}) : helper)))
    + "\">\n          <a\n            href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"href") || (depth0 != null ? lookupProperty(depth0,"href") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"href","hash":{},"data":data,"loc":{"start":{"line":7,"column":18},"end":{"line":7,"column":26}}}) : helper)))
    + "\"\n            class=\"social__link\"\n            target=\"_blank\"\n            rel=\"noopener\"\n            aria-label=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"socialService") || (depth0 != null ? lookupProperty(depth0,"socialService") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"socialService","hash":{},"data":data,"loc":{"start":{"line":11,"column":24},"end":{"line":11,"column":41}}}) : helper)))
    + "\"\n          >\n            <span class=\"social__icon\"></span>\n          </a>\n        </li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"social\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":2},"end":{"line":18,"column":11}}})) != null ? stack1 : "")
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
      