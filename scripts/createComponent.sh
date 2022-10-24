COMPONENT_NAME=$1

mkdir src/components/$1;
touch src/components/$1/$1.tsx;
mkdir src/components/$1/__specs__;
touch src/components/$1/__specs__/$1.spec.tsx;
touch src/components/$1/$1.stories.tsx;
