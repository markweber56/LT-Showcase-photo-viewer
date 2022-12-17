import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function BasicButtonExample() {

  const baseURL = 'https://jsonplaceholder.typicode.com/photos';

   async function handleClick(i) {
    const msg = 'you clicked option ' + i;
    console.log(msg);
    const results = await retrievePhotos(i);
    if (results == null) {
      console.log("an error occured");
    } else {
      console.log(`${results.length} results returned`)
    }
  };

  async function retrievePhotos(i) {
    try {
      const response = await fetch(
        `${baseURL}?albumId=${i}`
      );
      const data = await response.json();
      console.log(data)
      return data;
    } catch(error) {
      return null;
    }

  }

  return (
    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
      <Dropdown.Item href="#/action-1" onClick={() => handleClick(1)}>Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2" onClick={() => handleClick(2)}>Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3" onClick={() => handleClick(3)}>Something else</Dropdown.Item>
    </DropdownButton>
  );
}

export default BasicButtonExample;