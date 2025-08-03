"use client";

import { useState } from 'react';
import { format } from 'date-fns';
import { Check, Clipboard, GitBranch, Info, Layers, Server, Settings, Tag, Terminal } from 'lucide-react';

import type { DeploymentAggregate } from '@/types/deployment';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { Label } from './ui/label';

interface DeploymentDetailProps {
  deployment: DeploymentAggregate | null;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function DeploymentDetail({ deployment, isOpen, onOpenChange }: DeploymentDetailProps) {
  const [showJson, setShowJson] = useState(false);
  const { toast } = useToast();
  const [hasCopied, setHasCopied] = useState(false);

  if (!deployment) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(deployment, null, 2));
    setHasCopied(true);
    toast({ title: 'Copied to clipboard!' });
    setTimeout(() => setHasCopied(false), 2000);
  };

  const DetailItem = ({ label, value, icon }: { label: string; value: React.ReactNode; icon?: React.ReactNode }) => (
    <div className="flex items-start justify-between py-2 border-b border-border/50">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        {icon}
        <span>{label}</span>
      </div>
      <div className="text-right text-sm font-medium text-foreground max-w-[60%] break-words">{value}</div>
    </div>
  );

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:w-3/5 sm:max-w-none lg:w-2/5 xl:w-1/3 flex flex-col p-0">
        <SheetHeader className="p-6 border-b">
          <SheetTitle className="font-headline text-2xl truncate">{deployment.manifest.name}</SheetTitle>
          <SheetDescription>{deployment.helm.description}</SheetDescription>
        </SheetHeader>
        <div className="p-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Switch
              id="json-toggle"
              checked={showJson}
              onCheckedChange={setShowJson}
            />
            <Label htmlFor="json-toggle">Show Raw JSON</Label>
          </div>
          <Button variant="outline" size="sm" onClick={handleCopy}>
            {hasCopied ? <Check className="mr-2 h-4 w-4" /> : <Clipboard className="mr-2 h-4 w-4" />}
            Copy Info
          </Button>
        </div>
        <ScrollArea className="flex-grow">
          <div className="px-6 pb-6">
            {showJson ? (
              <pre className="text-xs p-4 rounded-md bg-muted text-muted-foreground font-code overflow-x-auto">
                <code>{JSON.stringify(deployment, null, 2)}</code>
              </pre>
            ) : (
              <div className="space-y-6">
                <section>
                  <h3 className="font-semibold text-lg font-headline flex items-center gap-2 mb-2"><Info className="h-5 w-5 text-primary" />Manifest</h3>
                  <DetailItem label="App Version" value={deployment.manifest.appVersion} icon={<Tag className="h-4 w-4" />} />
                  <DetailItem label="Chart Version" value={deployment.manifest.chartVersion} icon={<Layers className="h-4 w-4" />} />
                  <DetailItem label="Repository" value={deployment.manifest.chartRepository} icon={<GitBranch className="h-4 w-4" />} />
                </section>
                <section>
                  <h3 className="font-semibold text-lg font-headline flex items-center gap-2 mb-2"><Settings className="h-5 w-5 text-primary" />Helm Release</h3>
                  <DetailItem label="Name" value={deployment.helm.name} />
                  <DetailItem label="Status" value={deployment.helm.status} />
                  <DetailItem label="First Deployed" value={format(new Date(deployment.helm.firstDeployed), 'PPpp')} />
                  <DetailItem label="Last Deployed" value={format(new Date(deployment.helm.lastDeployed), 'PPpp')} />
                </section>
                <section>
                  <h3 className="font-semibold text-lg font-headline flex items-center gap-2 mb-2"><Server className="h-5 w-5 text-primary" />Kubernetes Resource</h3>
                  <DetailItem label="Namespace" value={deployment.helm.k8sResource.namespace} />
                  <DetailItem label="Resource Name" value={deployment.helm.k8sResource.resourceName} />
                  <DetailItem label="Resource Type" value={deployment.helm.k8sResource.resourceType} />
                  <DetailItem label="Resource UID" value={<span className="font-code text-xs">{deployment.helm.k8sResource.resourceUID}</span>} icon={<Terminal className="h-4 w-4" />} />
                </section>
              </div>
            )}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
