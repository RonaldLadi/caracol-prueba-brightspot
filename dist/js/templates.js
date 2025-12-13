
          this.Templates = this.Templates || {};
          this.Templates['card'] =
            Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"image") || (depth0 != null ? lookupProperty(depth0,"image") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data,"loc":{"start":{"line":3,"column":14},"end":{"line":3,"column":23}}}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":3,"column":30},"end":{"line":3,"column":39}}}) : helper)))
    + "\">\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li class=\"card-item\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"image") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":2},"end":{"line":4,"column":9}}})) != null ? stack1 : "")
    + "  <div class=\"card-body\">\n    <h4>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":6,"column":8},"end":{"line":6,"column":17}}}) : helper)))
    + "</h4>\n    <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":7,"column":7},"end":{"line":7,"column":22}}}) : helper)))
    + "</p>\n  </div>\n</li>\n";
},"useData":true});
        

          this.Templates = this.Templates || {};
          this.Templates['main'] =
            Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"components/header/header"),depth0,{"name":"components/header/header","hash":{"logo":(depth0 != null ? lookupProperty(depth0,"logo") : depth0),"navigation":(depth0 != null ? lookupProperty(depth0,"navigation") : depth0)},"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
        

          this.Templates = this.Templates || {};
          this.Templates['header/header'] =
            Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<header class=\"site-header\">\n  <div class=\"header-inner\">\n\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"components/header/navigation"),depth0,{"name":"components/header/navigation","hash":{"navigation":(depth0 != null ? lookupProperty(depth0,"navigation") : depth0)},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"components/header/logo"),depth0,{"name":"components/header/logo","hash":{"logo":(depth0 != null ? lookupProperty(depth0,"logo") : depth0)},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n  </div>\n</header>\n";
},"usePartial":true,"useData":true});
        

          this.Templates = this.Templates || {};
          this.Templates['header/logo'] =
            Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"href") || (depth0 != null ? lookupProperty(depth0,"href") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"href","hash":{},"data":data,"loc":{"start":{"line":2,"column":11},"end":{"line":2,"column":19}}}) : helper)))
    + "\" class=\"site-logo\">\n    <img\n      src=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"image") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + "\"\n      width=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"image") : depth0)) != null ? lookupProperty(stack1,"width") : stack1), depth0))
    + "\"\n      height=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"image") : depth0)) != null ? lookupProperty(stack1,"height") : stack1), depth0))
    + "\"\n      alt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"alt") || (depth0 != null ? lookupProperty(depth0,"alt") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"alt","hash":{},"data":data,"loc":{"start":{"line":7,"column":11},"end":{"line":7,"column":18}}}) : helper)))
    + "\"\n    >\n  </a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"logo") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":10,"column":9}}})) != null ? stack1 : "");
},"useData":true});
        

          this.Templates = this.Templates || {};
          this.Templates['header/navigation'] =
            Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <li class=\"nav-item "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isCurrent") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":26},"end":{"line":8,"column":59}}})) != null ? stack1 : "")
    + "\">\n        <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"href") || (depth0 != null ? lookupProperty(depth0,"href") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"href","hash":{},"data":data,"loc":{"start":{"line":9,"column":17},"end":{"line":9,"column":25}}}) : helper)))
    + "\">\n          "
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":10,"column":10},"end":{"line":10,"column":18}}}) : helper)))
    + "\n        </a>\n      </li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "is-active";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<nav class=\"main-navigation\">\n  <button class=\"nav-toggle\" aria-label=\"Abrir menú\">\n    ☰\n  </button>\n\n  <ul class=\"nav-list\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"navigation") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"items") : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":13,"column":13}}})) != null ? stack1 : "")
    + "  </ul>\n</nav>\n";
},"useData":true});
        

          this.Templates = this.Templates || {};
          this.Templates['breadcrumbs/breadcrumbs'] =
            Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});
        

          this.Templates = this.Templates || {};
          this.Templates['actions/actions'] =
            Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});
        

          this.Templates = this.Templates || {};
          this.Templates['actions/button'] =
            Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});
        

          this.Templates = this.Templates || {};
          this.Templates['audioPlayer/audioPlayer'] =
            Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});
        

          this.Templates = this.Templates || {};
          this.Templates['hotTopics/hotTopics'] =
            Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});
        

          this.Templates = this.Templates || {};
          this.Templates['hotTopics/social'] =
            Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});
        

          this.Templates = this.Templates || {};
          this.Templates['pageLead/pageLead'] =
            Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});
        

          this.Templates = this.Templates || {};
          this.Templates['lead/lead'] =
            Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});
        

          this.Templates = this.Templates || {};
          this.Templates['subheadline/subheadline'] =
            Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});
        

          this.Templates = this.Templates || {};
          this.Templates['headline/headline'] =
            Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});
        