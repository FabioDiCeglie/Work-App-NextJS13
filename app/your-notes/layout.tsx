import { fetchCategories } from '#/lib/hooks';
import { Boundary } from '#/ui/Boundary';
import React from 'react';
import CategoryNav from './CategoryNav';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await fetchCategories();
  return (
    <Boundary
      labels={['main layout']}
      color="orange"
      animateRerendering={false}
    >
      <div className="space-y-9">
        <div className="flex items-center justify-between">
          <CategoryNav categories={categories} />
        </div>

        <div>{children}</div>
      </div>
    </Boundary>
  );
}
