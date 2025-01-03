package com.intsol

class UrlMappings {

    static mappings = {
        delete "/$controller/$id(.$format)?"(action:'delete')
        get "/$controller(.$format)?"(action:'index')
        get "/$controller/$id(.$format)?"(action:'show')
        post "/$controller(.$format)?"(action:'save')
        put "/$controller/$id(.$format)?"(action:'update')
        patch "/$controller/$id(.$format)?"(action:'patch')

        '/api/v1/books'(resources:'book')

        "/authors1"(version:'1.0', controller: 'author', namespace: 'v1')
        "/authors2"(version:'2.0', controller: 'author', namespace: 'v2')

        '/'(controller: 'application', action:'index')
        '500'(view: '/error')
        '404'(view: '/notFound')
    }

}
