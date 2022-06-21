class CustomError extends Error{
    statusCode: Number

    constructor(code: Number, message: string){
        
            super(message)
            this.statusCode = code
    }
    
}