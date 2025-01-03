package com.intsol

class BootStrap {

    def init = { servletContext ->
        new Book(title: 'Machine Learning Unleashed', author: 'Rajesh K', publisher: 'Oreilly').save()
        new Book(title: 'Deep Learning Unleashed', author: 'Mukhesh K', publisher: 'Oreilly').save()
        new com.intsol.v1.Author(name: 'Rajkumar').save()
        new com.intsol.v1.Author(name: 'Rajesh').save()
        new com.intsol.v2.AuthorV2(name: 'Mukhesh').save()
        new com.intsol.v2.AuthorV2(name: 'Anil').save()
    }

    def destroy = {
    }

}
