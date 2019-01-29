(function () {

    var laroute = (function () {

        var routes = {

            absolute: false,
            rootUrl: 'http://localhost',
            routes : [{"host":null,"methods":["GET","HEAD"],"uri":"arrilot\/load-widget","name":null,"action":"Arrilot\Widgets\Controllers\WidgetController@showWidget"},{"host":null,"methods":["GET","HEAD"],"uri":"api\/user","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"\/","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"login","name":"login","action":"App\Http\Controllers\Auth\LoginController@showLoginForm"},{"host":null,"methods":["POST"],"uri":"login","name":null,"action":"App\Http\Controllers\Auth\LoginController@login"},{"host":null,"methods":["POST"],"uri":"logout","name":"logout","action":"App\Http\Controllers\Auth\LoginController@logout"},{"host":null,"methods":["GET","HEAD"],"uri":"register","name":"register","action":"App\Http\Controllers\Auth\RegisterController@showRegistrationForm"},{"host":null,"methods":["POST"],"uri":"register","name":null,"action":"App\Http\Controllers\Auth\RegisterController@register"},{"host":null,"methods":["GET","HEAD"],"uri":"password\/reset","name":"password.request","action":"App\Http\Controllers\Auth\ForgotPasswordController@showLinkRequestForm"},{"host":null,"methods":["POST"],"uri":"password\/email","name":"password.email","action":"App\Http\Controllers\Auth\ForgotPasswordController@sendResetLinkEmail"},{"host":null,"methods":["GET","HEAD"],"uri":"password\/reset\/{token}","name":"password.reset","action":"App\Http\Controllers\Auth\ResetPasswordController@showResetForm"},{"host":null,"methods":["POST"],"uri":"password\/reset","name":"password.update","action":"App\Http\Controllers\Auth\ResetPasswordController@reset"},{"host":null,"methods":["POST"],"uri":"api\/login","name":"uccello.api.login","action":"Uccello\Core\Http\Controllers\Core\ApiAuthController@login"},{"host":null,"methods":["GET","HEAD"],"uri":"api\/logout","name":"uccello.api.logout","action":"Uccello\Core\Http\Controllers\Core\ApiAuthController@logout"},{"host":null,"methods":["GET","HEAD"],"uri":"api\/me","name":"uccello.api.me","action":"Uccello\Core\Http\Controllers\Core\ApiAuthController@me"},{"host":null,"methods":["GET","HEAD"],"uri":"api\/refresh","name":"uccello.api.refresh","action":"Uccello\Core\Http\Controllers\Core\ApiAuthController@refresh"},{"host":null,"methods":["GET","HEAD"],"uri":"api\/{domain}\/{module}","name":"uccello.api.index","action":"Uccello\Core\Http\Controllers\Core\ApiController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"api\/{domain}\/{module}\/{id}","name":"uccello.api.show","action":"Uccello\Core\Http\Controllers\Core\ApiController@show"},{"host":null,"methods":["POST"],"uri":"api\/{domain}\/{module}","name":"uccello.api.store","action":"Uccello\Core\Http\Controllers\Core\ApiController@store"},{"host":null,"methods":["POST"],"uri":"api\/{domain}\/{module}\/{id}","name":"uccello.api.update","action":"Uccello\Core\Http\Controllers\Core\ApiController@update"},{"host":null,"methods":["DELETE"],"uri":"api\/{domain}\/{module}\/{id}","name":"uccello.api.destroy","action":"Uccello\Core\Http\Controllers\Core\ApiController@destroy"},{"host":null,"methods":["GET","HEAD"],"uri":"logout","name":"logout","action":"\App\Http\Controllers\Auth\LoginController@logout"},{"host":null,"methods":["GET","HEAD"],"uri":"{domain}\/api\/doc","name":"uccello.api.doc","action":"Uccello\Core\Http\Controllers\Core\SwaggerController@api"},{"host":null,"methods":["GET","HEAD"],"uri":"{domain}\/role\/edit","name":"uccello.role.edit","action":"Uccello\Core\Http\Controllers\Role\EditController@process"},{"host":null,"methods":["GET","HEAD"],"uri":"{domain}\/user\/edit","name":"uccello.user.edit","action":"Uccello\Core\Http\Controllers\User\EditController@process"},{"host":null,"methods":["POST"],"uri":"{domain}\/domain","name":"uccello.domain.save","action":"Uccello\Core\Http\Controllers\Domain\EditController@save"},{"host":null,"methods":["GET","HEAD"],"uri":"{domain}\/settings","name":"uccello.settings.dashboard","action":"Uccello\Core\Http\Controllers\Settings\SettingsController@dashboard"},{"host":null,"methods":["GET","HEAD"],"uri":"{domain}\/settings\/module\/manager","name":"uccello.settings.module.manager","action":"Uccello\Core\Http\Controllers\Settings\ModuleManagerController@process"},{"host":null,"methods":["POST"],"uri":"{domain}\/settings\/module\/activation","name":"uccello.settings.module.activation","action":"Uccello\Core\Http\Controllers\Settings\ModuleManagerController@activation"},{"host":null,"methods":["GET","HEAD"],"uri":"{domain}\/settings\/menu\/manager","name":"uccello.settings.menu.manager","action":"Uccello\Core\Http\Controllers\Settings\MenuManagerController@process"},{"host":null,"methods":["POST"],"uri":"{domain}\/settings\/menu\/store","name":"uccello.settings.menu.store","action":"Uccello\Core\Http\Controllers\Settings\MenuManagerController@store"},{"host":null,"methods":["POST"],"uri":"{domain}\/settings\/menu\/reset","name":"uccello.settings.menu.reset","action":"Uccello\Core\Http\Controllers\Settings\MenuManagerController@reset"},{"host":null,"methods":["GET","HEAD"],"uri":"{domain}\/home","name":"uccello.home","action":"Uccello\Core\Http\Controllers\Core\IndexController@process"},{"host":null,"methods":["GET","HEAD"],"uri":"{domain}\/{module}","name":"uccello.index","action":"Uccello\Core\Http\Controllers\Core\IndexController@process"},{"host":null,"methods":["GET","HEAD"],"uri":"{domain}\/{module}\/list","name":"uccello.list","action":"Uccello\Core\Http\Controllers\Core\ListController@process"},{"host":null,"methods":["POST"],"uri":"{domain}\/{module}\/list\/datatable","name":"uccello.datatable","action":"Uccello\Core\Http\Controllers\Core\ListController@processForDatatable"},{"host":null,"methods":["POST"],"uri":"{domain}\/{module}\/list\/filter","name":"uccello.list.filter.save","action":"Uccello\Core\Http\Controllers\Core\ListController@saveFilter"},{"host":null,"methods":["POST"],"uri":"{domain}\/{module}\/export","name":"uccello.export","action":"Uccello\Core\Http\Controllers\Core\ExportController@process"},{"host":null,"methods":["GET","HEAD"],"uri":"{domain}\/{module}\/list\/filter\/delete","name":"uccello.list.filter.delete","action":"Uccello\Core\Http\Controllers\Core\ListController@deleteFilter"},{"host":null,"methods":["GET","HEAD"],"uri":"{domain}\/{module}\/detail","name":"uccello.detail","action":"Uccello\Core\Http\Controllers\Core\DetailController@process"},{"host":null,"methods":["GET","HEAD"],"uri":"{domain}\/{module}\/edit","name":"uccello.edit","action":"Uccello\Core\Http\Controllers\Core\EditController@process"},{"host":null,"methods":["GET","HEAD"],"uri":"{domain}\/{module}\/edit\/relation","name":"uccello.edit.relation.add","action":"Uccello\Core\Http\Controllers\Core\EditController@addRelation"},{"host":null,"methods":["GET","HEAD"],"uri":"{domain}\/{module}\/delete","name":"uccello.delete","action":"Uccello\Core\Http\Controllers\Core\DeleteController@process"},{"host":null,"methods":["POST"],"uri":"{domain}\/{module}","name":"uccello.save","action":"Uccello\Core\Http\Controllers\Core\EditController@save"}],
            prefix: '',

            route : function (name, parameters, route) {
                route = route || this.getByName(name);

                if ( ! route ) {
                    return undefined;
                }

                return this.toRoute(route, parameters);
            },

            url: function (url, parameters) {
                parameters = parameters || [];

                var uri = url + '/' + parameters.join('/');

                return this.getCorrectUrl(uri);
            },

            toRoute : function (route, parameters) {
                var uri = this.replaceNamedParameters(route.uri, parameters);
                var qs  = this.getRouteQueryString(parameters);

                if (this.absolute && this.isOtherHost(route)){
                    return "//" + route.host + "/" + uri + qs;
                }

                return this.getCorrectUrl(uri + qs);
            },

            isOtherHost: function (route){
                return route.host && route.host != window.location.hostname;
            },

            replaceNamedParameters : function (uri, parameters) {
                uri = uri.replace(/\{(.*?)\??\}/g, function(match, key) {
                    if (parameters.hasOwnProperty(key)) {
                        var value = parameters[key];
                        delete parameters[key];
                        return value;
                    } else {
                        return match;
                    }
                });

                // Strip out any optional parameters that were not given
                uri = uri.replace(/\/\{.*?\?\}/g, '');

                return uri;
            },

            getRouteQueryString : function (parameters) {
                var qs = [];
                for (var key in parameters) {
                    if (parameters.hasOwnProperty(key)) {
                        qs.push(key + '=' + parameters[key]);
                    }
                }

                if (qs.length < 1) {
                    return '';
                }

                return '?' + qs.join('&');
            },

            getByName : function (name) {
                for (var key in this.routes) {
                    if (this.routes.hasOwnProperty(key) && this.routes[key].name === name) {
                        return this.routes[key];
                    }
                }
            },

            getByAction : function(action) {
                for (var key in this.routes) {
                    if (this.routes.hasOwnProperty(key) && this.routes[key].action === action) {
                        return this.routes[key];
                    }
                }
            },

            getCorrectUrl: function (uri) {
                var url = this.prefix + '/' + uri.replace(/^\/?/, '');

                if ( ! this.absolute) {
                    return url;
                }

                return this.rootUrl.replace('/\/?$/', '') + url;
            }
        };

        var getLinkAttributes = function(attributes) {
            if ( ! attributes) {
                return '';
            }

            var attrs = [];
            for (var key in attributes) {
                if (attributes.hasOwnProperty(key)) {
                    attrs.push(key + '="' + attributes[key] + '"');
                }
            }

            return attrs.join(' ');
        };

        var getHtmlLink = function (url, title, attributes) {
            title      = title || url;
            attributes = getLinkAttributes(attributes);

            return '<a href="' + url + '" ' + attributes + '>' + title + '</a>';
        };

        return {
            // Generate a url for a given controller action.
            // laroute.action('HomeController@getIndex', [params = {}])
            action : function (name, parameters) {
                parameters = parameters || {};

                return routes.route(name, parameters, routes.getByAction(name));
            },

            // Generate a url for a given named route.
            // laroute.route('routeName', [params = {}])
            route : function (route, parameters) {
                parameters = parameters || {};

                return routes.route(route, parameters);
            },

            // Generate a fully qualified URL to the given path.
            // laroute.route('url', [params = {}])
            url : function (route, parameters) {
                parameters = parameters || {};

                return routes.url(route, parameters);
            },

            // Generate a html link to the given url.
            // laroute.link_to('foo/bar', [title = url], [attributes = {}])
            link_to : function (url, title, attributes) {
                url = this.url(url);

                return getHtmlLink(url, title, attributes);
            },

            // Generate a html link to the given route.
            // laroute.link_to_route('route.name', [title=url], [parameters = {}], [attributes = {}])
            link_to_route : function (route, title, parameters, attributes) {
                var url = this.route(route, parameters);

                return getHtmlLink(url, title, attributes);
            },

            // Generate a html link to the given controller action.
            // laroute.link_to_action('HomeController@getIndex', [title=url], [parameters = {}], [attributes = {}])
            link_to_action : function(action, title, parameters, attributes) {
                var url = this.action(action, parameters);

                return getHtmlLink(url, title, attributes);
            }

        };

    }).call(this);

    /**
     * Expose the class either via AMD, CommonJS or the global object
     */
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return laroute;
        });
    }
    else if (typeof module === 'object' && module.exports){
        module.exports = laroute;
    }
    else {
        window.laroute = laroute;
    }

}).call(this);

