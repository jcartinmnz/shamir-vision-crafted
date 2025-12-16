const Stats = () => {
  return (
    <section className="py-16 lg:py-20 bg-dark-surface text-dark-surface-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-5xl lg:text-7xl font-bold mb-4 text-primary">+40%</div>
            <p className="text-xl opacity-90">campo de visión útil</p>
          </div>
          <div className="text-center">
            <div className="text-5xl lg:text-7xl font-bold mb-4 text-primary">#1</div>
            <p className="text-xl opacity-90">en personalización con IA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
