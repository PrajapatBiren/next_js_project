import { useThunkDispatch, useTypedSelector } from "@/redux/store";
import { addNewUserAction, editUserData, removeUsersData } from "@/redux/form/reducers";
import CustomBtn from "../button/button";
import icons from '@/resources/icons';
import { HeaderViewWrapper } from "../stylesComponent/stylesCmp";

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
        <HeaderViewWrapper >
            <CustomBtn onClick={() => editUser()} data={<icons.EditOutlined style={{ fontSize: 16 }} />} />
            <CustomBtn onClick={() => addNewUser()} data={<icons.PlusOutlined style={{ fontSize: 16 }} />} />
            <CustomBtn onClick={() => deleteUsers()} data={<icons.DeleteOutlined style={{ fontSize: 16 }} />} />
        </HeaderViewWrapper>
    )
}
export default HeaderView


