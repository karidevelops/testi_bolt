import { Card } from "@/components/ui/card";

export const BadgeVariants = () => {
  return (
    <div className="p-8 space-y-8 bg-secondary">
      <h2 className="text-3xl font-bold text-center mb-12">Suosituin Badge Variants</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">

        {/* Variant 1: Top Right Corner Ribbon */}
        <Card className="relative p-6 h-64 overflow-hidden">
          <div className="absolute -top-1 -right-1 w-32 h-32 overflow-hidden">
            <div className="absolute top-8 -right-8 bg-accent text-accent-foreground px-12 py-1.5 rotate-45 text-xs font-bold uppercase tracking-wide shadow-lg text-center w-40">
              Suosituin
            </div>
          </div>
          <h3 className="text-lg font-bold mb-2">Variant 1</h3>
          <p className="text-sm text-muted-foreground">Top right corner ribbon (current)</p>
        </Card>

        {/* Variant 2: Top Left Corner */}
        <Card className="relative p-6 h-64 overflow-hidden">
          <div className="absolute -top-1 -left-1 w-32 h-32 overflow-hidden">
            <div className="absolute top-8 -left-8 bg-accent text-accent-foreground px-12 py-1.5 -rotate-45 text-xs font-bold uppercase tracking-wide shadow-lg text-center w-40">
              Suosituin
            </div>
          </div>
          <h3 className="text-lg font-bold mb-2">Variant 2</h3>
          <p className="text-sm text-muted-foreground">Top left corner ribbon</p>
        </Card>

        {/* Variant 3: Top Center Badge */}
        <Card className="relative p-6 h-64 overflow-hidden">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-6 py-2 rounded-b-lg text-xs font-bold uppercase tracking-wide shadow-lg">
            Suosituin
          </div>
          <h3 className="text-lg font-bold mb-2 mt-4">Variant 3</h3>
          <p className="text-sm text-muted-foreground">Top center hanging badge</p>
        </Card>

        {/* Variant 4: Top Right Pill */}
        <Card className="relative p-6 h-64">
          <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
            Suosituin
          </div>
          <h3 className="text-lg font-bold mb-2">Variant 4</h3>
          <p className="text-sm text-muted-foreground">Top right pill badge</p>
        </Card>

        {/* Variant 5: Top Left Pill */}
        <Card className="relative p-6 h-64">
          <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
            Suosituin
          </div>
          <h3 className="text-lg font-bold mb-2">Variant 5</h3>
          <p className="text-sm text-muted-foreground">Top left pill badge</p>
        </Card>

        {/* Variant 6: Top Right Angular Badge */}
        <Card className="relative p-6 h-64">
          <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-4 py-2 text-xs font-bold uppercase tracking-wide shadow-lg" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 20% 100%)' }}>
            Suosituin
          </div>
          <h3 className="text-lg font-bold mb-2 mt-6">Variant 6</h3>
          <p className="text-sm text-muted-foreground">Top right angular badge</p>
        </Card>

        {/* Variant 7: Vertical Side Badge */}
        <Card className="relative p-6 h-64 overflow-hidden">
          <div className="absolute top-12 -right-8 bg-accent text-accent-foreground px-10 py-2 rotate-90 text-xs font-bold uppercase tracking-wide shadow-lg">
            Suosituin
          </div>
          <h3 className="text-lg font-bold mb-2">Variant 7</h3>
          <p className="text-sm text-muted-foreground">Vertical right side badge</p>
        </Card>

        {/* Variant 8: Top Banner Full Width */}
        <Card className="relative p-6 h-64 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 bg-accent text-accent-foreground py-2 text-xs font-bold uppercase tracking-wide shadow-lg text-center">
            Suosituin
          </div>
          <h3 className="text-lg font-bold mb-2 mt-8">Variant 8</h3>
          <p className="text-sm text-muted-foreground">Full width top banner</p>
        </Card>

        {/* Variant 9: Sticker Style Top Right */}
        <Card className="relative p-6 h-64">
          <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wide shadow-lg border-2 border-accent-foreground/20 rotate-3">
            Suosituin
          </div>
          <h3 className="text-lg font-bold mb-2">Variant 9</h3>
          <p className="text-sm text-muted-foreground">Sticker style badge</p>
        </Card>

        {/* Variant 10: Corner Fold */}
        <Card className="relative p-6 h-64 overflow-hidden">
          <div className="absolute top-0 right-0 w-0 h-0" style={{
            borderLeft: '60px solid transparent',
            borderTop: '60px solid var(--accent)',
          }}>
          </div>
          <div className="absolute top-2 right-2 text-accent-foreground text-[10px] font-bold uppercase tracking-wide rotate-45 origin-center">
            Suosituin
          </div>
          <h3 className="text-lg font-bold mb-2">Variant 10</h3>
          <p className="text-sm text-muted-foreground">Corner fold style</p>
        </Card>

        {/* Variant 11: Floating Badge with Shadow */}
        <Card className="relative p-6 h-64">
          <div className="absolute -top-3 right-6 bg-accent text-accent-foreground px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wide shadow-2xl transform hover:scale-105 transition-transform">
            ⭐ Suosituin
          </div>
          <h3 className="text-lg font-bold mb-2 mt-4">Variant 11</h3>
          <p className="text-sm text-muted-foreground">Floating badge with icon</p>
        </Card>

        {/* Variant 12: Side Tab */}
        <Card className="relative p-6 h-64 overflow-hidden">
          <div className="absolute top-8 -left-2 bg-accent text-accent-foreground px-6 py-2 rounded-r-lg text-xs font-bold uppercase tracking-wide shadow-lg">
            Suosituin
          </div>
          <h3 className="text-lg font-bold mb-2">Variant 12</h3>
          <p className="text-sm text-muted-foreground">Left side tab badge</p>
        </Card>

      </div>
    </div>
  );
};

export default BadgeVariants;
