import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

export function PostFeatured() {
  const slug = "qualquer";
  const postLink = `/post/${slug}}`;

  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoverImage
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          width: 1200,
          height: 720,
          src: "/images/bryen_9.png",
          alt: "Alt da imagem",
          priority: true,
        }}
      />
      <div className="flex flex-col gap-4 sm:justify-center">
        <time className="text-slate-600  text-sm/tight" dateTime="2025-04-20">
          20/04/2025 10:00
        </time>
        <PostHeading as="h1" url={postLink}>
          Lorem ipsum, dolor
        </PostHeading>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
          ducimus dolorem rerum soluta voluptates? Veritatis illum fugit
          reiciendis voluptatum perspiciatis esse nisi eveniet quod debitis?
          Quidem perspiciatis id sint recusandae!
        </p>
      </div>
    </section>
  );
}
