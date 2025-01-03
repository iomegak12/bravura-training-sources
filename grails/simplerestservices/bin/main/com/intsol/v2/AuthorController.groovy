package com.intsol.v2


import grails.rest.*
import grails.converters.*

class AuthorController {
	static responseFormats = ['json', 'xml']
	
    static namespace = "v2"

    def index() { 
        return "v2"
    }
}
