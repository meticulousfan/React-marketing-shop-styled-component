import Form from 'react-bootstrap/Form';

export default function DropdownCor(props) {
    return (
        <Form.Select aria-label="Default select example" className="w-25">
            <option></option>
            {props.params.map((param, index) => {
                return <option key={String(index)}>{param}</option>;
            })}
        </Form.Select>
    );
}
