import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { PostHeading } from "@/components/PostHeading";

import { Suspense } from "react";
import { PostCoverImage } from "@/components/PostCoverImage";

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <PostCoverImage
          linkProps={{
            href: "/post/assdfda",
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
          <PostHeading as="h1" url="#">
            Qualquer coisa{" "}
          </PostHeading>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
            ducimus dolorem rerum soluta voluptates? Veritatis illum fugit
            reiciendis voluptatum perspiciatis esse nisi eveniet quod debitis?
            Quidem perspiciatis id sint recusandae!
          </p>
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <h1 className="text-6xl font-bold text-center py-8">FOOTER</h1>
      </footer>
    </Container>
  );
}
