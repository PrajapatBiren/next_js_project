import { PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useThunkDispatch, useTypedSelector } from "@/redux/store";
import { addNewUserAction, editUserData, removeUsersData } from "@/redux/form/reducers";
import CustomBtn from "../button/button";

const HeaderView = () => {
    const specificData = useTypedSelector((state: any) => state.userReducer.specificData)
    const disableStatus = useTypedSelector((state: any) => state.userReducer.disabled)
    const dispatch = useThunkDispatch()

    const deleteUsers = () => {
        let id: any = specificData.id
        if (specificData.id) {
            dispatch(removeUsersData({ id }))
        } else { }
    }
    const addNewUser = () => {
        if (disableStatus) {
            dispatch(addNewUserAction())
        } else { }
    }
    const editUser = () => {
        // if (disableStatus) {
        dispatch(editUserData())
        // } else { }
    }
    return (
        <div>
            <div style={{
                width: '20%', display: 'flex', height: 50,
                justifyContent: 'space-around', alignItems: 'center', paddingTop: 20
            }}>
                <CustomBtn onClick={() => editUser()} data={<EditOutlined />} />
                <CustomBtn onClick={() => addNewUser()} data={<PlusOutlined />} />
                <CustomBtn onClick={() => deleteUsers()} data={<DeleteOutlined />} />
            </div>
        </div>
    )
}
export default HeaderView


