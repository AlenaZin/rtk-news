import { Skeleton } from "../../components/Skeleton/Skeleton";

type PropsType = {
  isLoading: boolean;
} & {[key:string]: any};

export function withSkeleton( Component: any, type: "bunner" | "item", count: number) {
  return function WithSkeleton(props: PropsType) {
    const { isLoading, ...restProps } = props;

    if (isLoading) {
      return <Skeleton type={type} counte={count} />;
    }

    return <Component {...restProps} />;
  };
}
