import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Container, Button as FButton} from 'react-floating-action-button'

function FormDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleSubmit = (e) => { 
      e.preventDefault(); 
      const game = {
        name: e.target.name.value,
        platform : e.target.platform.value,
        genre : e.target.genre.value,
        publisher : e.target.publisher.value,
        players : e.target.players.value,
        boxart : e.target.boxart.value,
        releaseDate: e.target.date.value
      }
      fetch("http://localhost:8080/games/", {
        method: "POST",
        headers:{
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(game)
     });
      alert('Added Game');
      props.onGameAdd();
      handleClose();
  };
  

  return (
    <div>
      <Container>
            <FButton
                tooltip="Add Game"
                icon="fa fa-plus"
                onClick={handleClickOpen} />
        </Container>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Game</DialogTitle>
        <DialogContent>
        <form id="addGame" action="/" method="POST" onSubmit={handleSubmit}>
          <TextField
            required 
            autoFocus
            margin="dense"
            id="name"
            name= "name"
            label="Name"
            type="TextField"
            fullWidth
          />
          <TextField
            required 
            autoFocus
            margin="dense"
            id="platform"
            name= "platform"
            label="Platform"
            type="TextField"
            fullWidth
          />
         <TextField
            required 
            autoFocus
            margin="dense"
            id="genre"
            name= "genre"
            label="Genre"
            type="TextField"
            fullWidth
          />
          <TextField
            required 
            autoFocus
            margin="dense"
            id="publisher"
            name= "publisher"
            label="Publisher"
            type="TextField"
            fullWidth
          />
          <TextField
            required 
            autoFocus
            margin="dense"
            id="players"
            name= "players"
            label="Players"
            type="number"
            fullWidth
          />
          <TextField
            required
            id="date"
            name="date"
            label="Release Date"
            type="date"
            InputLabelProps={{
              shrink: true,
          }}
  />
          <TextField
            required 
            autoFocus
            margin="dense"
            id="boxart"
            name= "boxart"
            label="Box Art URL"
            type="TextField"
            fullWidth
          />
          {/*<input accept="image/*"
            id="boxart"
            name = "boxart"
            required
            type="file"
          />*/}
         </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary" form="addGame">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormDialog;
