import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';

const Note = (props) => {

  const deleting = (id) => {
    props.getId(id);
  }
  const updating = (note) => {
    props.getUpdateNoteId(note);
  }
  return (<>
    <div className="note" style={{display:"flex",justifyContent:"space-evenly"}}>
      <h3>{props.title}</h3>
      <br />
      <p>{props.content}</p>
      <div style={{display:"flex",gap:"5px", margin:"10px 0px 0px -10px"}}>
      <button onClick={() => deleting(props.id)}>
        <DeleteIcon className="Delete" />
      </button>
      <button style={{ "marginLeft": "10px" }}
        onClick={() => updating({ content: props.content, title: props.title, id: props.id })}>
        <EditNoteIcon /> </button>
        </div>
    </div>
  </>);
}
export default Note;