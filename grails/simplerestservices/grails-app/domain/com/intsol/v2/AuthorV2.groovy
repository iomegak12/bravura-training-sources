package com.intsol.v2

import grails.rest.*

@Resource()
class AuthorV2 {

    static namespace = 'v2'

    String name

    static constraints = {
        name blank:false
    }

    static mapping = {
        table 'authors_v2'
        id column: "id"
        version false
    }
}
