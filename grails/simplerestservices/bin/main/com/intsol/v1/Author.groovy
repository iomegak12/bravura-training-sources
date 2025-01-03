package com.intsol.v1

import grails.rest.*

@Resource()
class Author {

    static namespace = "v1"

    String name

    static constraints = {
        name blank:false
    }

    static mapping = {
        table 'authors_v1'
        id column: "id"
        version false
    }
}