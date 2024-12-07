
export default function ({commentData}) {
    return (
        <div className="comment">
            <div className="comment-author-img-section">
                <img src="/src/assets/user.png" alt="Author img" className="comment-author-img" />
            </div>
            <div className="comment-description">
                <span className="comment-author">{commentData.commentAuthorName}</span>
                <span className="comment-date">{commentData.commentDate}</span>
                <p>{commentData.commentText}</p>
            </div>
        </div>
    )
}