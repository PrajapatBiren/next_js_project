import { addUserData, updateUserData } from "@/redux/form/reducers"
import { useThunkDispatch, useTypedSelector } from "@/redux/store"
import { UserOutlined, MailOutlined } from "@ant-design/icons"
import { DatePicker, Form, Input, Radio } from "antd"
import { useEffect, useState } from "react"
import moment from "moment"
import CustomBtn from "../button/button"
import InputField from "../inputField/inputField"
import { InnerWrapper, StyleButton } from "../stylesComponent/stylesCmp"

const FormView = () => {

    const { TextArea } = Input
    const dateFormate = "DD-MM-YYYY"
    const [firstName, setFirstName] = useState<any>()
    const [lastName, setLastName] = useState<any>()
    const [email, setEmail] = useState<any>()
    const [description, setDescription] = useState<any>()
    const [gender, setGender] = useState<any>()
    const [dob, setDob] = useState<any>()
    const dispatch: any = useThunkDispatch()
    const specificData: any = useTypedSelector((state: any) => state.userReducer.specificData)
    const disableStatus = useTypedSelector((state: any) => state.userReducer.disabled)
    useEffect(() => {
        setFirstName(specificData?.firstName),
            setLastName(specificData?.lastName),
            setEmail(specificData?.email),
            setGender(specificData?.gender)
        setDescription(specificData?.description)
    }, [specificData])

    function handleChange(event: any, type: any) {
        switch (type) {
            case 'fName':
                setFirstName(event.target.value);
                break
            case 'lName':
                setLastName(event.target.value);
                break
            case 'email':
                setEmail(event.target.value);
                break
            case 'description':
                setDescription(event.target.value);
                break
            case 'gender':
                setGender(event.target.value);
                break
        }
    }
    const onSubmitForm = () => {
        if (specificData.id) {
            let body = {
                id: specificData?.id,
                firstName: firstName,
                lastName: lastName,
                email: email,
                description: description,
                gender: gender,
                dob: dob
            }
            if (email) {
                dispatch(updateUserData({ body }));
            } else { }
        } else {
            let body = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                description: description,
                gender: gender,
                dob: dob
            }
            if (email) {
                dispatch(addUserData({ body }));
                setFirstName("");
                setLastName("");
                setEmail("");
                setDescription("");
                setGender("");
                setDob("")
            } else { }
        }

    }
    const selectDate = (value: any) => {
        let selectedDate = moment(value, dateFormate);
        setDob(selectedDate)
    }

    return (
        <div style={{ width: '65%' }}>
            <Form disabled={disableStatus}>
                <InnerWrapper>
                    <InputField
                        value={firstName}
                        formItemStyle={{ width: '48%' }}
                        prefix={<UserOutlined />}
                        placeholder="First Name"
                        onChange={(text: any) => handleChange(text, "fName")}
                    />
                    <Form.Item style={{ width: '48%' }}>
                        <Input
                            value={lastName}
                            prefix={<UserOutlined />}
                            placeholder="Last name"
                            onChange={(text) => handleChange(text, "lName")}
                        />
                    </Form.Item>
                </InnerWrapper>
                <InputField
                    value={email}
                    prefix={<MailOutlined />}
                    type="email"
                    placeholder="Email"
                    required={true}
                    onChange={(text: any) => handleChange(text, "email")}
                />
                <Form.Item>
                    <TextArea rows={8}
                        value={description}
                        placeholder="description"
                        onChange={(text) => handleChange(text, "description")}
                    />
                </Form.Item>
                <Form.Item label="Date of birth">
                    <DatePicker
                        value={dob ? dob : null}
                        onChange={(date, dateString) => { selectDate(date?.format(dateFormate)) }}
                    // format={"DD-MM-YYYY"}
                    />
                </Form.Item>
                <h4 style={{ marginBottom: 10 }}>Gender</h4>
                <Radio.Group value={gender} onChange={(gender) => handleChange(gender, "gender")}>
                    <Radio value={"Male"}>Male</Radio>
                    <Radio value={"Female"}>Female</Radio>
                </Radio.Group>
                <div style={{ marginTop: 10 }}>
                    <StyleButton onClick={() => onSubmitForm()} >
                        Submit
                    </StyleButton>
                </div>
            </Form>
        </div>
    )
}
export default FormView