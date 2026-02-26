import * as Fa from 'react-icons/fa';
import * as Fa6 from 'react-icons/fa6';
import * as Bi from 'react-icons/bi';
import * as Bs from 'react-icons/bs';
import * as Md from 'react-icons/md';
import type { IconBaseProps } from 'react-icons';

const IconLibraries: Record<string, Record<string, React.ComponentType<IconBaseProps>>> = { 
  fa: Fa as Record<string, React.ComponentType<IconBaseProps>>,
  fa6: Fa6 as Record<string, React.ComponentType<IconBaseProps>>,
  bi: Bi as Record<string, React.ComponentType<IconBaseProps>>,
  bs: Bs as Record<string, React.ComponentType<IconBaseProps>>,
  md: Md as Record<string, React.ComponentType<IconBaseProps>>,
};

export const DynamicIcon = ({ lib, name, ...props }: { lib: string; name: string } & IconBaseProps) => {
  const IconComponent = IconLibraries[lib.toLowerCase()]?.[name];
  return IconComponent ? <IconComponent {...props} /> : <Fa.FaRegQuestionCircle {...props} />;
};