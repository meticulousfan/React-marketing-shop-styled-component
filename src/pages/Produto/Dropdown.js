import Form from 'react-bootstrap/Form';

export default function DropdownCor(props) {
    return (
        <Form.Select aria-label="Default select example" className="w-25">
            <option></option>
            {props.cores.map((cor, index) => {
                return (
                    <>
                        <option key={String(index)}>{cor}</option>
                    </>
                );
            })}
        </Form.Select>
    );
}
