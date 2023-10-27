import React from 'react';

export const Button: React.FC<{ primary?: boolean }> = ({ primary }: { primary?: boolean }) => {
  const className = `${primary ? 'bg-primary' : 'bg-blue-500'} px-4 py-3 text-white`;
  return <button className={className}>button!</button>;
};
