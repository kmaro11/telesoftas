export function Post({post}) {
    return (
        <>
            <li className="px-2 py-5">
                <h2 className="mb-2 text-black font-bold text-xl">
                    {post.title}
                </h2>
                <p className="text-gray-500">{post.body}</p>
            </li>
        </>
    )
}