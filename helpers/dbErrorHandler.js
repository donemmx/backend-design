"Use Strict"


// Get Unique Error Message

const uniqueMessage = (err) => {
    let output;
    try {
        let fieldName = err.message.split(".$")[1]
        field = field.split(' dub key')[0]
        field = field.substring(0, field.lastIndexOf("_"))
        req.flash('errors',[{
            message: `An Account with this ${fieldName} already exists`
        }])

        output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + ' already exists';
    }
    catch (err) {
        output = 'already exists';
    }

    return output;
}
