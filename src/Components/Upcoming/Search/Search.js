import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Button from 'react-bootstrap/Button'

export default function Search(props) {


    return (
        <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faSearch} /></span>
                <input type="text" class="form-control" placeholder="Search"></input>
            <Button variant="outline-primary">Primary</Button>{' '}
            <Button variant="outline-secondary">Secondary</Button>{' '}
        </div>
    );
}