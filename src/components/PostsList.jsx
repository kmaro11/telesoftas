import { Pagination } from "./Pagination";
import { Post } from "./Post";

export function PostsList() {
    return (
        <>
            <div className="w-full flex flex-col border border-grey rounded-md">
                <Post />

                <Pagination />
            </div>
        </>
    )
}