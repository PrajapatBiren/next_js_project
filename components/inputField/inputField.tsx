import { Form, Input } from "antd";


export default function InputField(props: any) {
    return (
        <Form.Item style={props?.formItemStyle}>
            <Input
                value={props?.value}
                prefix={props?.prefix}
                placeholder={props?.placeholder}
                onChange={props?.onChange}
            />
        </Form.Item>
    )
}