import { ListItem } from "./ListItem";
import { Pagination } from "./Pagination";

export function UsersList() {
    return (
        <>
            <div className="w-full flex flex-col border border-grey rounded-md">
                <div className="flex px-2 py-5 border-b border-grey">
                    <div className="w-1/2">
                        name
                    </div>
                    <div className="w-1/2">
                        Email
                    </div>
                </div>

                <ListItem />

                <Pagination />
            </div>
        </>
    )
}