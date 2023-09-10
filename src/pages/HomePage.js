import { PostCard } from "../components";

const posts = [
  {id: 1, title: "Lorem ipsum dolor sit amet", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quibusdam cupiditate minus molestias! Unde est consequatur dignissimos, quae nostrum cumque recusandae laboriosam deserunt temporibus magnam! Voluptas modi ullam, dolor temporibus mollitia alias minima officiis doloribus quis sunt eos. Doloribus tenetur distinctio esse qui natus reiciendis eaque est quidem illo voluptatum!", author: "Colin" },
  {id: 2, title: "Lorem ipsum dolor sit amet", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quibusdam cupiditate minus molestias! Unde est consequatur dignissimos, quae nostrum cumque recusandae laboriosam deserunt temporibus magnam! Voluptas modi ullam, dolor temporibus mollitia alias minima officiis doloribus quis sunt eos. Doloribus tenetur distinctio esse qui natus reiciendis eaque est quidem illo voluptatum!", author: "Thomas" }
]

export const HomePage = () => {
  return (
    <section>
      { posts.map(post => (
        <PostCard key={post.id} post={post}/>
      ))}
    </section>
  )
}
