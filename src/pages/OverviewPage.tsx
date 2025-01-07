import { motion } from 'framer-motion';
import Header from '../components/common/Header';
import StatCard from '../components/common/StatCard';
import CategoryDistributionChart from '../components/overview/CategoryDistributionChart';
import SalesOverviewChart from '../components/overview/SalesOverviewChart';
import { dataCards } from '../data';

const OverviewPage = () => {
  return (
    <section className="flex-1 overflow-auto relative z-10">
      <Header title="Overview" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 20 }}
          transition={{ duration: 1 }}
        >
          {Array.isArray(dataCards) &&
            dataCards.map((element) => (
              <StatCard
                key={element.id}
                name={element.name}
                value={element.value}
                icon={element.icon}
                color={element.color}
              />
            ))}
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <SalesOverviewChart />
          <CategoryDistributionChart />
        </div>
      </main>
    </section>
  );
};

export default OverviewPage;
