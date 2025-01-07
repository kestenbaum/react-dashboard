import {
  BarChart2,
  DollarSign,
  Settings,
  ShoppingBag,
  ShoppingCart,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';

export const SIDEBAR_ITEMS = [
  { name: 'Overview', icon: BarChart2, color: '#6366f1', href: '/' },
  { name: 'Products', icon: ShoppingBag, color: '#8B5CF6', href: '/products' },
  { name: 'Users', icon: Users, color: '#EC4899', href: '/users' },
  { name: 'Sales', icon: DollarSign, color: '#10B981', href: '/sales' },
  { name: 'Orders', icon: ShoppingCart, color: '#F59E0B', href: '/orders' },
  { name: 'Analytics', icon: TrendingUp, color: '#3B82F6', href: '/analytics' },
  { name: 'Settings', icon: Settings, color: '#6EE7B7', href: '/settings' },
];

export const dataCards = [
  {
    id: 1,
    name: 'Total Sales',
    icon: Zap,
    value: '12.345',
    color: '#6366F1',
  },
  {
    id: 2,
    name: 'New Users',
    icon: Users,
    value: '1.234',
    color: '#8B5CF6',
  },
  {
    id: 3,
    name: 'Total Products',
    icon: ShoppingBag,
    value: '567',
    color: '#EC4899',
  },
  {
    id: 4,
    name: 'Conversion Rate',
    icon: BarChart2,
    value: '12.5%',
    color: '#10B981',
  },
];
