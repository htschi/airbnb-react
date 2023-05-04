import ReviewCreate from './reviewCreate'

export default function Review() {
  return (
    <div>
      <h2 className="mt-5">0 Reviews</h2>
      <span>Leave a review</span>
      <ReviewCreate />
    </div>
  )
}
