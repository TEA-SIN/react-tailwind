import React from 'react'
import { Card } from 'flowbite-react';

export default function CardDetail({title, description, image}) {
  return (
    <Card
      className="max-w-sm"
      imgSrc={image || "no image"}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title || "no title"}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description || "no description"}
      </p>
    </Card>
  )
}
