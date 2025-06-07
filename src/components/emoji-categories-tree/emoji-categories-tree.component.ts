import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { dataSource } from '../../constants/group-and-category';
import { CategoryNode } from '../../types/types';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'emoji-categories-tree',
  template: ` <mat-tree
    #tree
    [dataSource]="dataSource"
    [childrenAccessor]="childrenAccessor"
  >
    <!-- This is the tree node template for leaf nodes -->
    <mat-tree-node
      class="bg-surface !text-on-primary !font-pixelify-sans !text-3xl !capitalize"
      *matTreeNodeDef="let node"
      matTreeNodePadding
    >
      <!-- use a disabled button to provide padding for tree leaf -->
      <button mat-icon-button disabled></button>

      <a
        class="hover:!text-accent cursor-pointer"
        [routerLink]="['/search/group', node.name]"
        >{{ node.name }}</a
      >
    </mat-tree-node>

    <!-- This is the tree node template for expandable nodes -->
    <mat-tree-node
      *matTreeNodeDef="let node; when: hasChild"
      matTreeNodePadding
      matTreeNodeToggle
      [cdkTreeNodeTypeaheadLabel]="node.name"
      class="bg-surface !text-on-primary !font-pixelify-sans !text-4xl !capitalize"
    >
      <button
        mat-icon-button
        matTreeNodeToggle
        [attr.aria-label]="'Toggle ' + node.name"
      >
        <mat-icon class="mat-icon-rtl-mirror ">
          {{ tree.isExpanded(node) ? 'expand_more' : 'chevron_right' }}
        </mat-icon>
      </button>

      <a
        class="bg-surface !text-on-primary !font-pixelify-sans !text-4xl !capitalize cursor-pointer hover:!text-accent"
        [routerLink]="['/search/category', node.name]"
        >{{ node.name }}</a
      >
    </mat-tree-node>
  </mat-tree>`,

  standalone: true,
  imports: [MatTreeModule, MatButtonModule, MatIconModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmojiCategoriesTree {
  dataSource = dataSource;
  childrenAccessor = (node: CategoryNode) => node.children ?? [];

  hasChild = (_: number, node: CategoryNode) =>
    !!node.children && node.children.length > 0;
}
