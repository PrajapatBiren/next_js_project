import { List } from "antd"
import VirtualList from 'rc-virtual-list';
import styles from '../../styles/formList.module.css'
import { useThunkDispatch, useTypedSelector } from "@/redux/store";
import { specificUserData } from "@/redux/form/reducers";
import SearchBar from "./searchBar";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FormListSubWrapper } from "../stylesComponent/stylesCmp";

const FormList = (props: any) => {
    const selector = useTypedSelector((state: any) => state.userReducer.info)
    const [searchArr, setSearchArr] = useState<any>([]);
    const [arrList, setArrList] = useState<any>([])
    const [keyword, setKeyword] = useState<any>('');
    const dispatch: any = useThunkDispatch();
    const specificData = useTypedSelector((state: any) => state.userReducer.specificData)


    useEffect(() => {
        setArrList(selector)
    }, [selector])

    const ContainerHeight = 500;
    const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
        if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === ContainerHeight) {
        }
    };
    const getValue = (id: any) => {
        dispatch(specificUserData({ id }))
    }
    const updateKeyword = (keyword: any) => {
        const filtered = selector.filter((item: any) => {
            return `${item.firstName.toLowerCase()} ${item.lastName.toLowerCase()}`.includes(keyword.toLowerCase());
        })
        setSearchArr(filtered);
        setKeyword(keyword);
        setArrList(filtered)
    }

    return (
        <FormListSubWrapper>
            <div className={styles.flex_container}>
                <SearchBar keyword={keyword} onChange={updateKeyword} />
            </div>
            <List>
                <VirtualList
                    data={arrList}
                    height={ContainerHeight}
                    itemHeight={47}
                    itemKey="email"
                    onScroll={onScroll}
                >
                    {(item) => (
                        <List.Item onClick={() => getValue(item.id)} key={item} className={styles.flex_container}>
                            <Link href={""} style={{
                                width: "100%",
                                background: specificData.id === item.id ? "#F0F0F0" : "",
                                border: "none", padding: "0.7rem", borderRadius: 10, marginTop: 5,
                            }}>
                                <List.Item.Meta
                                    title={`${item.firstName} ${item.lastName}`}
                                    description={item.email}
                                />
                            </Link>
                        </List.Item>
                    )}
                </VirtualList>
            </List>
        </FormListSubWrapper>
    )
}
export default FormList