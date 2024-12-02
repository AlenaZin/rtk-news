import { Skeleton } from "../../components/Skeleton/Skeleton";

type PropsType = {
  isLoading: boolean;
} & {[key:string]: any};

export function withSkeleton( Component: any, type: "bunner" | "item", count: number, direction: 'column' | 'row') {
  return function WithSkeleton(props: PropsType) {
    const { isLoading, ...restProps } = props;

    if (isLoading) {
      return <Skeleton type={type} count={count} direction={direction}/>;
    }

    return <Component {...restProps} />;
  };
}
