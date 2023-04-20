import { Button, Form } from "antd";


export default function CustomBtn(props: any) {
    return (
        <Form.Item >
            <Button style={props.btnStyle} onClick={props?.onClick} type={props?.type} htmlType={props?.htmlType}>
                {props.data}
            </Button>
        </Form.Item>
    );
}