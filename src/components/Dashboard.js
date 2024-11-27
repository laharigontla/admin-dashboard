import { Activity, DollarSign, Key, ShieldCheck, ShoppingCart, TrendingUp, UserPlus, Users } from 'lucide-react';
import React from 'react';

export function Dashboard() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <Card title="Cohort Size" value="1000" icon={Users} change="+50.1%" color="bg-pink-500" />
      <Card title="New Comers" value="+20" icon={UserPlus} change="+12.5%" color="bg-green-500" />
      <Card title="Active Users" value="3" icon={ShieldCheck} change="+2" color="bg-purple-500" />
      <Card title="Total Permissions" value="4" icon={Key} change="+1" color="bg-cyan-500" />
      <Chart title="User Growth" icon={TrendingUp} color="bg-indigo-500" />
      <Chart title="Revenue" icon={DollarSign} color="bg-yellow-500" />
      <Chart title="Sales" icon={ShoppingCart} color="bg-teal-500" />
      <Chart title="System Activity" icon={Activity} color="bg-orange-500" />
    </div>
  );
}

function Card({ title, value, icon: Icon, change, color }) {
  return (
    <div className={`${color} p-6 rounded-md text-white`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-medium">{title}</h3>
        <Icon className="h-8 w-8 opacity-75" />
      </div>
      <div className="text-3xl font-bold mb-2">{value}</div>
      <p className="text-sm opacity-75">{change} from last period</p>
    </div>
  );
}

function Chart({ title, icon: Icon, color }) {
  return (
    <div className={`${color} p-6 rounded-lg text-white`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-medium">{title}</h3>
        <Icon className="h-8 w-8" />
      </div>
      <div className="h-40 flex items-end justify-between">
        {[...Array(7)].map((_, i) => (
          <div key={i} className="w-7 bg-black bg-opacity-25" style={{height: `${Math.random() * 100}%`}}></div>
        ))}
      </div>
    </div>
  );
}