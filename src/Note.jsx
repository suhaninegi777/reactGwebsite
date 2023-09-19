import DeleteIcon from '@mui/icons-material/Delete';

const Note= (props) =>{
const deleting = () => {
props.delete_item(props.id);
}
return(<>
<div className="note" >
    <h3>{props.title}</h3>
    <br />
    <p>{props.content}</p>
      <button onClick={deleting}>
        <DeleteIcon className="Delete"/>
      </button>
</div>
</>);
}
export default Note;