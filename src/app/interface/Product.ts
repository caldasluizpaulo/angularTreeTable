export interface Product {
  cola?: string;
  colb?: string;
  colc?: string;
  cold?: string;

  // tree table fields
      label?: string;
      data?: any;
      icon?: any;
      expandedIcon?: any;
      collapsedIcon?: any;
      children?: Product[];
      leaf?: boolean;
      expanded?: boolean;
      type?: string;
      partialSelected?: boolean;
      styleClass?: string;
      draggable?: boolean;
      droppable?: boolean;
      selectable?: boolean;
  }
