const Note = require("../../models/note")

const index = async (request, respond) => {

try {
  const notes = await Note.find({ 'user':request.user._id

  });
  respond.json(notes);

    } catch {
    respond.status(400).json(err);
    }

};


const create = async (request, respond) => {
   
    try {
        const note = await Note.create({
           text: request.body.text,
            user: request.user._id
       });
        
        respond.json(note);
        
     } catch (err) {
      // Client will check for non-2xx status code 
      // 400 = Bad Request
         respond.status(400).json(err);
       }
    }

    async function deleteNote(request, respond) {
      try {
          await Note.deleteOne({_id: request.params.id, user: request.user._id});
          respond.json(true);
      } catch (err) {
          respond.status(400).json(err);
      }
  }

    module.exports = {
      index,  
      create,
      delete: deleteNote
    };