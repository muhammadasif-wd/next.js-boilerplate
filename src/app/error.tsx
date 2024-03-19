"use client";
import {Button, Card, CardBody} from "@nextui-org/react";
import Image from "next/image";
import {useRouter} from "next/navigation";
import {Suspense, useEffect} from "react";

import images from "./images";
import Loading from "./loading";

export default function Error({
  error,
  reset,
}: {
  error: Error & {digest?: string};
  reset: () => void;
}) {
  useEffect(() => {}, [error]);
  const router = useRouter();
  const handleBack = () => {
    reset();
    router.back();
  };

  return (
    <Suspense fallback={<Loading />}>
      <main className="text-center flex justify-center h-screen items-center">
        <Card className="xl:w-7/12 lg:w-9/12 md:w-10/12 w-11/12 mx-auto">
          <CardBody className="grid md:grid-cols-2 place-items-center gap-3">
            <div>
              <Image
                alt="Page not found"
                className="bg-light w-full h-full rounded-xl"
                height={300}
                src={images.server}
                width={300}
              />
            </div>
            <div className="w-fit flex flex-col items-start gap-3">
              <h1 className="md:text-6xl sm:text-4xl text-3xl font-bold text-danger">Oops !</h1>
              <h4 className="lg:text-2xl md:text-xl font-semibold text-dark dark:text-light">
                500 | Internal Server Error
              </h4>
              <p className="text-dark dark:text-light">
                The server encountered an internal error or misconfiguration and was unable to
                complete your request
              </p>
              <Button color="primary" size="sm" variant="flat" onClick={() => router.back()}>
                {"Go -> Back"}
              </Button>
            </div>
          </CardBody>
        </Card>
      </main>
    </Suspense>
  );
}
