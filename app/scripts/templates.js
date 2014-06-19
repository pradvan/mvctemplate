this["JST"] = this["JST"] || {};

this["JST"]["app/templates/about.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"panel panel-default\">\n	<div class=\"panel-body\">\n		<h2>About</h2>\n		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat lectus et nulla tincidunt fringilla. Vestibulum pellentesque purus nisl, a rhoncus neque pulvinar eget. Praesent massa ante, euismod vitae rhoncus eu, euismod ut orci. Aenean enim tellus, convallis ornare augue et, luctus rhoncus ligula.</p>\n	</div>\n</div>";
  });

this["JST"]["app/templates/home.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"panel panel-default\">\n	<div class=\"panel-body\">\n		<h2>Home</h2>\n		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat lectus et nulla tincidunt fringilla. Aenean enim tellus, convallis ornare augue et, luctus rhoncus ligula.</p>\n		<button class=\"btn btn-primary btn-lg\" data-toggle=\"modal\" data-target=\"#";
  if (helper = helpers.modalId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.modalId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n			Launch modal\n		</button>\n	</div>\n</div>";
  return buffer;
  });

this["JST"]["app/templates/modal.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"modal fade\" id='";
  if (helper = helpers.modalId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.modalId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>\n	<div class=\"modal-dialog\">\n		<div class=\"modal-content\">\n			<div class=\"modal-header\">\n				<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n				<h4 class=\"modal-title\" id='myModalTitle'>Modal Popup</h4>\n			</div>\n			<div class=\"modal-body\" id='myModalBody'>\n				<p>This is a modal popup, loaded as a template.</p>\n			</div>\n			<div class=\"modal-footer\">\n				<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n			</div>\n		</div>\n	</div>\n</div>";
  return buffer;
  });